import {
	AuthorInformationProperties,
	ContainInformationProperties,
	DeviceInformationProperties,
	ImageInformationProperties,
	ImageResolution,
	ImageSize,
	LocationProperties,
} from "../inteface/inteface.photo";

export interface PhotoMetadataEntity {
	id: string;
	description: string;
	shareableLink: string;
	file: ImageInformationProperties;
	location: LocationProperties;
	resolution: ImageResolution;
	size: ImageSize;
	author: AuthorInformationProperties;
	contain: ContainInformationProperties;
	device: DeviceInformationProperties;
	createdAt: string;
	updatedAt: string;
}
