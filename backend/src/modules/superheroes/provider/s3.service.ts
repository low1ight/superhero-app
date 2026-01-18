import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

@Injectable()
export class S3Service {
  private readonly s3: S3Client;
  private readonly bucket: string;
  private readonly signedUrlExpiresIn: number;

  constructor(private readonly configService: ConfigService) {
    const BUCKET_NAME = this.configService.get<string>(
      'AWS_S3_BUCKET_NAME',
      '',
    );
    const BUCKET_REGION = this.configService.get<string>('AWS_S3_REGION', '');
    const ACCESS_KEY = this.configService.get<string>('AWS_ACCESS_KEY_ID', '');
    const SECRET_ACCESS_KEY = this.configService.get<string>(
      'AWS_SECRET_ACCESS_KEY',
      '',
    );

    this.bucket = BUCKET_NAME;
    this.signedUrlExpiresIn = this.configService.get<number>(
      'AWS_S3_SIGNED_URL_EXPIRES_IN',
      3600,
    );

    this.s3 = new S3Client({
      region: BUCKET_REGION,
      credentials: {
        secretAccessKey: SECRET_ACCESS_KEY,
        accessKeyId: ACCESS_KEY,
      },
    });
  }

  async putImage(img: Express.Multer.File, imgKey: string) {
    const params = {
      Bucket: this.bucket,
      Key: imgKey,
      Body: img.buffer,
      ContentType: img.mimetype,
    };

    const command = new PutObjectCommand(params);

    await this.s3.send(command);
  }

  async deleteImage(imgKey: string): Promise<void> {
    const params = {
      Bucket: this.bucket,
      Key: imgKey,
    };

    const command = new DeleteObjectCommand(params);

    await this.s3.send(command);
  }

  async signImage(imgKey: string) {
    const getObjectParams = {
      Bucket: this.bucket,
      Key: imgKey,
    };

    const command = new GetObjectCommand(getObjectParams);
    return await getSignedUrl(this.s3, command, {
      expiresIn: this.signedUrlExpiresIn,
    });
  }
}
