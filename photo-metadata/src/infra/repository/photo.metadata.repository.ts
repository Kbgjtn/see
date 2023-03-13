import { PhotoMetadataEntity } from "@/core/entity/entity.photo";
import { PhotoMetadataRepository } from "../../core/inteface/inteface.photo";

export default class PhotoMetadataRepositoryInMemory
	implements PhotoMetadataRepository
{
	private photoMetadata: PhotoMetadataEntity[] = [];
}

const seederPhotoMetadata: PhotoMetadataEntity = [];
