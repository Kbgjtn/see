import {
	PhotoMetadataRequestModel,
	PhotoMetadataResponseModel,
} from "@/core/model/model.photo";

export interface PhotoMetadataDataSource {
	createOne(photoMetadata: PhotoMetadataRequestModel): Promise<void>;
	createMany(photosMetadata: PhotoMetadataRequestModel[]): Promise<void>;
	deleteOne(id: string): Promise<void>;
	getOne(id: string): Promise<PhotoMetadataResponseModel>;
	getAll(): Promise<PhotoMetadataResponseModel[] | null>;
}
