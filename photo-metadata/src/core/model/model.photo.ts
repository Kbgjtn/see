import { PhotoMetadataEntity } from "../entity/entity.photo";

export interface PhotoMetadataRequestModel {
	id: string;
	metadata: PhotoMetadataEntity;
}

export interface PhotoMetadataResponseModel {
	readonly shareableLink: string;
	readonly fileName: string;
	readonly data: PhotoMetadataEntity;
}
