import { PhotoMetadataEntity } from "../entity/entity.photo";
import { PhotoMetadataRepository } from "../inteface/inteface.photo";
import { PhotoMetadataRequestModel } from "../model/model.photo";

export class PhotoMetadataRepositoryImpl implements PhotoMetadataRepository {
	photoDataSource: PhotoDataSource;

	constructor(photoDataSource: PhotoDataSource) {
		this.photoDataSource = photoDataSource;
	}

	async createOnePhotoMetadata(
		photoMetadata: PhotoMetadataRequestModel,
	): Promise<void> {
		await this.photoDataSource.createPhotoMetadata({ ...photoMetadata });
	}

	async createManyPhotoMetadata(
		photosMetadata: PhotoMetadataRequestModel[],
	): Promise<void> {
		await this.photoDataSource.createMany(photosMetadata);
	}

	async deletePhotoMetadata(id: string): Promise<void> {
		await this.photoDataSource.deletePhotoMetadata(id);
	}

	async getPhotoMetadata(
		id: string,
	): Promise<Readonly<PhotoMetadataEntity>> {
		const data = await this.photoDataSource.getOnePhotoMetadata(id);
		return data;
	}
}
