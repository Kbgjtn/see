import { PhotoMetadataEntity } from "../entity/entity.photo";
import {
	PhotoMetadataRequestModel,
	PhotoMetadataResponseModel,
} from "../model/model.photo";

export interface PhotoMetadataRepository {
	createOnePhotoMetadata(
		photoMetadata: PhotoMetadataRequestModel,
	): Promise<void>;
	createManyPhotoMetadata(
		photosMetadata: PhotoMetadataRequestModel[],
	): Promise<void>;
	deleteOnePhotoMetadata(id: string): Promise<void>;
	deleteOnePhotoMetadata(filter: string[]): Promise<void>;
	getOnePhotoMetadata(id: string): Promise<Readonly<PhotoMetadataEntity>>;
	getManyPhotoMetadata(): Promise<Readonly<PhotoMetadataEntity[]>>;
}

export interface CreateOnePhotoMetadataUseCase {
	execute(photoMetadata: PhotoMetadataRequestModel): Promise<void>;
}

export interface CreateManyPhotoMetadataUseCase {
	execute(photoMetadata: PhotoMetadataRequestModel[]): Promise<void>;
}

export interface DeleteOnePhotoMetadataUseCase {
	execute(id: string): Promise<void>;
}

export interface DeleteManyPhotoMetadataUseCase {
	execute(filter: string[]): Promise<void>;
}

export interface GetOnePhotoMetadataUseCase {
	execute(id: string): Promise<PhotoMetadataResponseModel>;
}

export interface GetAllPhotoMetadataUseCase {
	execute(): Promise<PhotoMetadataResponseModel[]>;
}

type DeviceInformationProperties = {
	apperture: number;
	type: string;
	model: string;
	makeBy: string;
	shutterSpeed: number; // make it 1/x
	megapixels: number; //
	fieldOfView: number; // in degree
	focalLength: number; // in mm
	hyperfocalDistance: number; // in m
	lightValue: number;
	whiteBalance: number;
	subjectDistanceRange: number;
	flash: FlashProperties;
	lens: LensProperties;
};

type Level = "high" | "normal" | "low";

type LensProperties = {
	size: number;
	info: string;
};

type ImageInformationProperties = {
	name: string;
	type: string;
	source: string;
	createTime: number;
	modifyTime: number;
	resolution: ImageResolution;
	section: string | string[];
	dataChunked: number;
	bitDepth: number;
	typeOfMIME: string;
	sharpness: Level;
	contrast: Level;
	customRendered: Level;
	saturation: Level;
	yCbCrSubSampling: string;
	ISO: number;
	colorSpace: string | string[];
	apperture: number;
	label: string;
	software: string;
	creatorTool: string;
	compression: string;
	zoomRatio: number;
	exposure: ExposureProperties;
	exif: EXIFMetadata;
	lightSource: string;
	scene: SceneProperties;
};

type ContainInformationProperties = {
	isTracked: boolean;
	text: boolean;
	faces: boolean;
	comment: string;
	description: string;
	watermarks: string | string[];
	unreadable: boolean;
	metadata: boolean;
	hasDataAppended: boolean;
	hasCopyright: boolean;
	hasLabel: boolean;
};

type AuthorInformationProperties = {
	name: string;
	comment: string;
};

interface photoResponseModel {
	id: string;
	imageUrl: string;
	basic: BasicMetadataPhotoModel;
	xmp: XMPMetadataPhotoModel;
	file: FileMetadataPhotoModel;
	composite: object;
}

type FileMetadataPhotoModel = {
	fileType: string;
	extention: string;
	typeOfMIME: string;
	exifByteOrder: string;
	userComment: string;
	encodingProcess: string;
	bitsPerSample: number;
	colorComponents: number;
	fileSize: number;
	width: number;
	height: number;
	YCbCrSubSampling: string;
	createdAt: number;
	modifyAt: number;
};

export type EXIFMetadata = { version: string | number };

{
	/*
type EXIFMetadata = {
	software: string;
	PositionOfYCbCr: string[];
	flash: Pick<FlashProperties, "pixVersion" | "isFunction">;
	dateTime: number;
	colorSpace: string;
	interoperabilityIndex: string;
	interoperabilityVersion: string;
	GPS: LocationProperties;
	compression: string;
	thumbnailLength: number;
	apertureValue: number;
	contrast: string;
	customRendered: string;
	time: number;
	digitalZoomRatio: number;
	exifVersion: string;
	exposure: ExposureProperties;
	fNumber: number;
	fileSource: string;
	focalLength: number;
	focalLenghtIn35mmFormat: number;
	gainControl: string;
	ISO: number;
	lightSource: string;
	maxApertureValue: number;
	meteringMode: string;
	saturation: string;
	sceneCaptureType: string;
	sceneType: string;
	sensingMethod: string;
	sharpness: string;
	shutterSpeedValue: string;
	subjectDistanceRange: string;
	userComment: string;
	whiteBalance: string;
	camera: Pick<CameraProperties, "brand" | "code">;
	modifyDate: number;
	thumbnailImageSize: number;
};
*/
}

export type XMPMetadataPhotoModel = {
	toolkit: string;
	creatorWorkUrl: string;
	imageNumber: number;
	lens: Pick<CameraProperties, "lens" | "shotAt">;
	creator: string;
	apertureValue: number;
	fNumber: number;
	flash: FlashProperties;
	timeOfGPS: number;
	legacyIPTCDigest: string;
	transmissionReference: string;
	creatorTool: string;
	label: string;
	modifyDate: number;
	hasMarked: boolean;
};

export type ExposureProperties = {
	compensation: number;
	mode: string;
	program: string;
	time: string;
};

export type SceneProperties = {
	captureType: string;
	type: string;
};

export type FlashProperties = {
	isFired: boolean;
	isFunction: boolean;
	mode: boolean;
	hasRedEyeMode: boolean;
	hasReturn: boolean;
	pixVersion: string;
};

export type BasicMetadataPhotoModel = {
	description: string;
	creator: string;
	camera: Omit<CameraProperties, "shotAt" | "lens">;
	lens: Pick<CameraProperties, "lens" | "shotAt">;
	exposure: string[];
	flash: string;
	userComment: string;
	fileComment: string;
	date: number;
	location: LocationProperties;
	colorEncoding: string;
};

export type CameraProperties = {
	brand: string | null;
	code: string | null;
	lens: string | number;
	shotAt: string | number;
};

export type ImageResolution = {
	width: number;
	height: number;
	extention: string;
	size: number;
};

export type ImageSize = {
	dimension: string;
	width: number;
	height: number;
	resolution: number;
};

export type LocationProperties = {
	latitude: string;
	longitude: string;
	altitude: string;
	version: string;
	latitudeRef: string;
	longitudeRef: string;
	mapDatum: string;
	versionId: string;
};
