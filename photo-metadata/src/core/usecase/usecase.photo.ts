import {
	CreateOnePhotoMetadataUseCase,
	DeletePhotoMetadataUseCase,
	GetOnePhotoMetadataUseCase,
	GetManyPhotoMetadataUseCase,
} from "../inteface/inteface.photo";
import {
	PhotoMetadataRequestModel,
	PhotoMetadataResponseModel,
} from "../model/model.photo";

export class CreateOnePhotoMetadata implements CreateOnePhotoMetadataUseCase {
	photoMetadataRepository: photoMetadataRepository;

	async execute(photoMetadata: PhotoMetadataRequestModel): Promise<void> {
		return await this.photoMetadataRepository.CreatePhotoMetadata(
			photoMetadata,
		);
	}
}

export class CreateManyPhotoMetadata implements CreateManyPhotoMetadata {
	photoMetadataRepository: photoMetadataRepository;

	async execute(photoMetadata: PhotoMetadataRequestModel): Promise<void> {
		return await this.photoMetadataRepository.CreatePhotoMetadata(
			photoMetadata,
		);
	}
}

export class DeleteOnePhotoMetadata implements DeleteOnePhotoMetadataUseCase {
	photoMetadataRepository: PhotoMetadataRepository;

	async execute(id: string): Promise<void> {
		return await this.photoMetadataRepository.delete(id);
	}
}

export class GetOnePhotoMetadata implements GetOnePhotoMetadataUseCase {
	photoMetadataRepository: PhotoMetadataRepository;

	async execute(id: string): Promise<PhotoMetadataResponseModel> {
		return await this.photoMetadataRepository.GetOne(id);
	}
}

export class GetManyPhotoMetadata implements GetManyPhotoMetadataUseCase {
	photoMetadataRepository: PhotoMetadataRepository;

	async execute(id: string): Promise<PhotoMetadataResponseModel> {
		return await this.photoMetadataRepository.GetOne(id);
	}
}
