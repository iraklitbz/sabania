export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export type ApartmentSabania = {
  __typename?: 'Apartment';
  address?: Maybe<ComponentAddressAddressSabania>;
  checkin?: Maybe<Scalars['String']['output']>;
  checkout?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  discount?: Maybe<Array<Maybe<ComponentDiscountDiscountSabania>>>;
  documentId: Scalars['ID']['output'];
  feature: UploadFileSabania;
  list?: Maybe<Scalars['JSON']['output']>;
  location?: Maybe<LocationSabania>;
  name: Scalars['String']['output'];
  photos?: Maybe<Array<Maybe<ComponentGalleryGallerySabania>>>;
  price: ComponentPricePriceSabania;
  privateName?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  rooms?: Maybe<ComponentAccommodationRoomsSabania>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  smoobuID: Scalars['String']['output'];
  standards?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ApartmentdiscountSabaniaArgs = {
  filters?: InputMaybe<ComponentDiscountDiscountFiltersInputSabania>;
  pagination?: InputMaybe<PaginationArgSabania>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ApartmentphotosSabaniaArgs = {
  filters?: InputMaybe<ComponentGalleryGalleryFiltersInputSabania>;
  pagination?: InputMaybe<PaginationArgSabania>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ApartmentEntityResponseCollectionSabania = {
  __typename?: 'ApartmentEntityResponseCollection';
  nodes: Array<ApartmentSabania>;
  pageInfo: PaginationSabania;
};

export type ApartmentFiltersInputSabania = {
  address?: InputMaybe<ComponentAddressAddressFiltersInputSabania>;
  and?: InputMaybe<Array<InputMaybe<ApartmentFiltersInputSabania>>>;
  checkin?: InputMaybe<StringFilterInputSabania>;
  checkout?: InputMaybe<StringFilterInputSabania>;
  createdAt?: InputMaybe<DateTimeFilterInputSabania>;
  description?: InputMaybe<StringFilterInputSabania>;
  discount?: InputMaybe<ComponentDiscountDiscountFiltersInputSabania>;
  documentId?: InputMaybe<IDFilterInputSabania>;
  list?: InputMaybe<JSONFilterInputSabania>;
  location?: InputMaybe<LocationFiltersInputSabania>;
  name?: InputMaybe<StringFilterInputSabania>;
  not?: InputMaybe<ApartmentFiltersInputSabania>;
  or?: InputMaybe<Array<InputMaybe<ApartmentFiltersInputSabania>>>;
  photos?: InputMaybe<ComponentGalleryGalleryFiltersInputSabania>;
  price?: InputMaybe<ComponentPricePriceFiltersInputSabania>;
  privateName?: InputMaybe<StringFilterInputSabania>;
  publishedAt?: InputMaybe<DateTimeFilterInputSabania>;
  rooms?: InputMaybe<ComponentAccommodationRoomsFiltersInputSabania>;
  shortDescription?: InputMaybe<StringFilterInputSabania>;
  slug?: InputMaybe<StringFilterInputSabania>;
  smoobuID?: InputMaybe<StringFilterInputSabania>;
  standards?: InputMaybe<StringFilterInputSabania>;
  updatedAt?: InputMaybe<DateTimeFilterInputSabania>;
};

export type ApartmentInputSabania = {
  address?: InputMaybe<ComponentAddressAddressInputSabania>;
  checkin?: InputMaybe<Scalars['String']['input']>;
  checkout?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  discount?: InputMaybe<Array<InputMaybe<ComponentDiscountDiscountInputSabania>>>;
  feature?: InputMaybe<Scalars['ID']['input']>;
  list?: InputMaybe<Scalars['JSON']['input']>;
  location?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  photos?: InputMaybe<Array<InputMaybe<ComponentGalleryGalleryInputSabania>>>;
  price?: InputMaybe<ComponentPricePriceInputSabania>;
  privateName?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rooms?: InputMaybe<ComponentAccommodationRoomsInputSabania>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  smoobuID?: InputMaybe<Scalars['String']['input']>;
  standards?: InputMaybe<Scalars['String']['input']>;
};

export type BooleanFilterInputSabania = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nei?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInputSabania>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentAccommodationRoomsSabania = {
  __typename?: 'ComponentAccommodationRooms';
  WC?: Maybe<Scalars['Int']['output']>;
  beds?: Maybe<Scalars['Int']['output']>;
  guests?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  rooms?: Maybe<Scalars['Int']['output']>;
};

export type ComponentAccommodationRoomsFiltersInputSabania = {
  WC?: InputMaybe<IntFilterInputSabania>;
  and?: InputMaybe<Array<InputMaybe<ComponentAccommodationRoomsFiltersInputSabania>>>;
  beds?: InputMaybe<IntFilterInputSabania>;
  guests?: InputMaybe<IntFilterInputSabania>;
  not?: InputMaybe<ComponentAccommodationRoomsFiltersInputSabania>;
  or?: InputMaybe<Array<InputMaybe<ComponentAccommodationRoomsFiltersInputSabania>>>;
  rooms?: InputMaybe<IntFilterInputSabania>;
};

export type ComponentAccommodationRoomsInputSabania = {
  WC?: InputMaybe<Scalars['Int']['input']>;
  beds?: InputMaybe<Scalars['Int']['input']>;
  guests?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  rooms?: InputMaybe<Scalars['Int']['input']>;
};

export type ComponentAddressAddressSabania = {
  __typename?: 'ComponentAddressAddress';
  city?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  latitude?: Maybe<Scalars['String']['output']>;
  longitude?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  street?: Maybe<Scalars['String']['output']>;
};

export type ComponentAddressAddressFiltersInputSabania = {
  and?: InputMaybe<Array<InputMaybe<ComponentAddressAddressFiltersInputSabania>>>;
  city?: InputMaybe<StringFilterInputSabania>;
  latitude?: InputMaybe<StringFilterInputSabania>;
  longitude?: InputMaybe<StringFilterInputSabania>;
  not?: InputMaybe<ComponentAddressAddressFiltersInputSabania>;
  or?: InputMaybe<Array<InputMaybe<ComponentAddressAddressFiltersInputSabania>>>;
  postalCode?: InputMaybe<StringFilterInputSabania>;
  street?: InputMaybe<StringFilterInputSabania>;
};

export type ComponentAddressAddressInputSabania = {
  city?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  latitude?: InputMaybe<Scalars['String']['input']>;
  longitude?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentDiscountDiscountSabania = {
  __typename?: 'ComponentDiscountDiscount';
  days?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  percentageDiscount?: Maybe<Scalars['Int']['output']>;
};

export type ComponentDiscountDiscountFiltersInputSabania = {
  and?: InputMaybe<Array<InputMaybe<ComponentDiscountDiscountFiltersInputSabania>>>;
  days?: InputMaybe<IntFilterInputSabania>;
  not?: InputMaybe<ComponentDiscountDiscountFiltersInputSabania>;
  or?: InputMaybe<Array<InputMaybe<ComponentDiscountDiscountFiltersInputSabania>>>;
  percentageDiscount?: InputMaybe<IntFilterInputSabania>;
};

export type ComponentDiscountDiscountInputSabania = {
  days?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  percentageDiscount?: InputMaybe<Scalars['Int']['input']>;
};

export type ComponentGalleryGallerySabania = {
  __typename?: 'ComponentGalleryGallery';
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  photos: Array<Maybe<UploadFileSabania>>;
  photos_connection?: Maybe<UploadFileRelationResponseCollectionSabania>;
};


export type ComponentGalleryGalleryphotosSabaniaArgs = {
  filters?: InputMaybe<UploadFileFiltersInputSabania>;
  pagination?: InputMaybe<PaginationArgSabania>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentGalleryGalleryphotos_connectionSabaniaArgs = {
  filters?: InputMaybe<UploadFileFiltersInputSabania>;
  pagination?: InputMaybe<PaginationArgSabania>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentGalleryGalleryFiltersInputSabania = {
  and?: InputMaybe<Array<InputMaybe<ComponentGalleryGalleryFiltersInputSabania>>>;
  name?: InputMaybe<StringFilterInputSabania>;
  not?: InputMaybe<ComponentGalleryGalleryFiltersInputSabania>;
  or?: InputMaybe<Array<InputMaybe<ComponentGalleryGalleryFiltersInputSabania>>>;
};

export type ComponentGalleryGalleryInputSabania = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  photos?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ComponentPricePriceSabania = {
  __typename?: 'ComponentPricePrice';
  id: Scalars['ID']['output'];
  increasePrice: Scalars['Float']['output'];
  maxTravelers: Scalars['Int']['output'];
  price: Scalars['Float']['output'];
  travelers: Scalars['Int']['output'];
};

export type ComponentPricePriceFiltersInputSabania = {
  and?: InputMaybe<Array<InputMaybe<ComponentPricePriceFiltersInputSabania>>>;
  increasePrice?: InputMaybe<FloatFilterInputSabania>;
  maxTravelers?: InputMaybe<IntFilterInputSabania>;
  not?: InputMaybe<ComponentPricePriceFiltersInputSabania>;
  or?: InputMaybe<Array<InputMaybe<ComponentPricePriceFiltersInputSabania>>>;
  price?: InputMaybe<FloatFilterInputSabania>;
  travelers?: InputMaybe<IntFilterInputSabania>;
};

export type ComponentPricePriceInputSabania = {
  id?: InputMaybe<Scalars['ID']['input']>;
  increasePrice?: InputMaybe<Scalars['Float']['input']>;
  maxTravelers?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  travelers?: InputMaybe<Scalars['Int']['input']>;
};

export type DateTimeFilterInputSabania = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  nei?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInputSabania>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DeleteMutationResponseSabania = {
  __typename?: 'DeleteMutationResponse';
  documentId: Scalars['ID']['output'];
};

export type FileInfoInputSabania = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInputSabania = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  nei?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInputSabania>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorphSabania = ApartmentSabania | ComponentAccommodationRoomsSabania | ComponentAddressAddressSabania | ComponentDiscountDiscountSabania | ComponentGalleryGallerySabania | ComponentPricePriceSabania | I18NLocaleSabania | LocationSabania | OrderSabania | ReviewWorkflowsWorkflowSabania | ReviewWorkflowsWorkflowStageSabania | UploadFileSabania | UsersPermissionsPermissionSabania | UsersPermissionsRoleSabania | UsersPermissionsUserSabania;

export type I18NLocaleSabania = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntityResponseCollectionSabania = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  nodes: Array<I18NLocaleSabania>;
  pageInfo: PaginationSabania;
};

export type I18NLocaleFiltersInputSabania = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInputSabania>>>;
  code?: InputMaybe<StringFilterInputSabania>;
  createdAt?: InputMaybe<DateTimeFilterInputSabania>;
  documentId?: InputMaybe<IDFilterInputSabania>;
  name?: InputMaybe<StringFilterInputSabania>;
  not?: InputMaybe<I18NLocaleFiltersInputSabania>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInputSabania>>>;
  publishedAt?: InputMaybe<DateTimeFilterInputSabania>;
  updatedAt?: InputMaybe<DateTimeFilterInputSabania>;
};

export type IDFilterInputSabania = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  nei?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IDFilterInputSabania>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInputSabania = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nei?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInputSabania>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JSONFilterInputSabania = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  nei?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JSONFilterInputSabania>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type LocationSabania = {
  __typename?: 'Location';
  city?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documentId: Scalars['ID']['output'];
  feature?: Maybe<UploadFileSabania>;
  gallery: Array<Maybe<UploadFileSabania>>;
  gallery_connection?: Maybe<UploadFileRelationResponseCollectionSabania>;
  latitude?: Maybe<Scalars['String']['output']>;
  longitude?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type LocationgallerySabaniaArgs = {
  filters?: InputMaybe<UploadFileFiltersInputSabania>;
  pagination?: InputMaybe<PaginationArgSabania>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Locationgallery_connectionSabaniaArgs = {
  filters?: InputMaybe<UploadFileFiltersInputSabania>;
  pagination?: InputMaybe<PaginationArgSabania>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LocationEntityResponseCollectionSabania = {
  __typename?: 'LocationEntityResponseCollection';
  nodes: Array<LocationSabania>;
  pageInfo: PaginationSabania;
};

export type LocationFiltersInputSabania = {
  and?: InputMaybe<Array<InputMaybe<LocationFiltersInputSabania>>>;
  city?: InputMaybe<StringFilterInputSabania>;
  createdAt?: InputMaybe<DateTimeFilterInputSabania>;
  description?: InputMaybe<StringFilterInputSabania>;
  documentId?: InputMaybe<IDFilterInputSabania>;
  latitude?: InputMaybe<StringFilterInputSabania>;
  longitude?: InputMaybe<StringFilterInputSabania>;
  not?: InputMaybe<LocationFiltersInputSabania>;
  or?: InputMaybe<Array<InputMaybe<LocationFiltersInputSabania>>>;
  publishedAt?: InputMaybe<DateTimeFilterInputSabania>;
  slug?: InputMaybe<StringFilterInputSabania>;
  updatedAt?: InputMaybe<DateTimeFilterInputSabania>;
};

export type LocationInputSabania = {
  city?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  feature?: InputMaybe<Scalars['ID']['input']>;
  gallery?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  latitude?: InputMaybe<Scalars['String']['input']>;
  longitude?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type MutationSabania = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayloadSabania>;
  createApartment?: Maybe<ApartmentSabania>;
  createLocation?: Maybe<LocationSabania>;
  createOrder?: Maybe<OrderSabania>;
  createReviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflowSabania>;
  createReviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStageSabania>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayloadSabania>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponseSabania;
  deleteApartment?: Maybe<DeleteMutationResponseSabania>;
  deleteLocation?: Maybe<DeleteMutationResponseSabania>;
  deleteOrder?: Maybe<DeleteMutationResponseSabania>;
  deleteReviewWorkflowsWorkflow?: Maybe<DeleteMutationResponseSabania>;
  deleteReviewWorkflowsWorkflowStage?: Maybe<DeleteMutationResponseSabania>;
  deleteUploadFile?: Maybe<UploadFileSabania>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayloadSabania>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponseSabania;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayloadSabania>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayloadSabania>;
  login: UsersPermissionsLoginPayloadSabania;
  /** Register a user */
  register: UsersPermissionsLoginPayloadSabania;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayloadSabania>;
  updateApartment?: Maybe<ApartmentSabania>;
  updateLocation?: Maybe<LocationSabania>;
  updateOrder?: Maybe<OrderSabania>;
  updateReviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflowSabania>;
  updateReviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStageSabania>;
  updateUploadFile: UploadFileSabania;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayloadSabania>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponseSabania;
};


export type MutationchangePasswordSabaniaArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationcreateApartmentSabaniaArgs = {
  data: ApartmentInputSabania;
  status?: InputMaybe<PublicationStatusSabania>;
};


export type MutationcreateLocationSabaniaArgs = {
  data: LocationInputSabania;
  status?: InputMaybe<PublicationStatusSabania>;
};


export type MutationcreateOrderSabaniaArgs = {
  data: OrderInputSabania;
  status?: InputMaybe<PublicationStatusSabania>;
};


export type MutationcreateReviewWorkflowsWorkflowSabaniaArgs = {
  data: ReviewWorkflowsWorkflowInputSabania;
  status?: InputMaybe<PublicationStatusSabania>;
};


export type MutationcreateReviewWorkflowsWorkflowStageSabaniaArgs = {
  data: ReviewWorkflowsWorkflowStageInputSabania;
  status?: InputMaybe<PublicationStatusSabania>;
};


export type MutationcreateUsersPermissionsRoleSabaniaArgs = {
  data: UsersPermissionsRoleInputSabania;
};


export type MutationcreateUsersPermissionsUserSabaniaArgs = {
  data: UsersPermissionsUserInputSabania;
};


export type MutationdeleteApartmentSabaniaArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationdeleteLocationSabaniaArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationdeleteOrderSabaniaArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationdeleteReviewWorkflowsWorkflowSabaniaArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationdeleteReviewWorkflowsWorkflowStageSabaniaArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationdeleteUploadFileSabaniaArgs = {
  id: Scalars['ID']['input'];
};


export type MutationdeleteUsersPermissionsRoleSabaniaArgs = {
  id: Scalars['ID']['input'];
};


export type MutationdeleteUsersPermissionsUserSabaniaArgs = {
  id: Scalars['ID']['input'];
};


export type MutationemailConfirmationSabaniaArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationforgotPasswordSabaniaArgs = {
  email: Scalars['String']['input'];
};


export type MutationloginSabaniaArgs = {
  input: UsersPermissionsLoginInputSabania;
};


export type MutationregisterSabaniaArgs = {
  input: UsersPermissionsRegisterInputSabania;
};


export type MutationresetPasswordSabaniaArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationupdateApartmentSabaniaArgs = {
  data: ApartmentInputSabania;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatusSabania>;
};


export type MutationupdateLocationSabaniaArgs = {
  data: LocationInputSabania;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatusSabania>;
};


export type MutationupdateOrderSabaniaArgs = {
  data: OrderInputSabania;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatusSabania>;
};


export type MutationupdateReviewWorkflowsWorkflowSabaniaArgs = {
  data: ReviewWorkflowsWorkflowInputSabania;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatusSabania>;
};


export type MutationupdateReviewWorkflowsWorkflowStageSabaniaArgs = {
  data: ReviewWorkflowsWorkflowStageInputSabania;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatusSabania>;
};


export type MutationupdateUploadFileSabaniaArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInputSabania>;
};


export type MutationupdateUsersPermissionsRoleSabaniaArgs = {
  data: UsersPermissionsRoleInputSabania;
  id: Scalars['ID']['input'];
};


export type MutationupdateUsersPermissionsUserSabaniaArgs = {
  data: UsersPermissionsUserInputSabania;
  id: Scalars['ID']['input'];
};

export type OrderSabania = {
  __typename?: 'Order';
  amountPayed?: Maybe<Scalars['String']['output']>;
  apartment?: Maybe<Scalars['String']['output']>;
  checkin?: Maybe<Scalars['String']['output']>;
  checkout?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  email?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  orderID?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  travelers?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OrderEntityResponseCollectionSabania = {
  __typename?: 'OrderEntityResponseCollection';
  nodes: Array<OrderSabania>;
  pageInfo: PaginationSabania;
};

export type OrderFiltersInputSabania = {
  amountPayed?: InputMaybe<StringFilterInputSabania>;
  and?: InputMaybe<Array<InputMaybe<OrderFiltersInputSabania>>>;
  apartment?: InputMaybe<StringFilterInputSabania>;
  checkin?: InputMaybe<StringFilterInputSabania>;
  checkout?: InputMaybe<StringFilterInputSabania>;
  createdAt?: InputMaybe<DateTimeFilterInputSabania>;
  date?: InputMaybe<DateTimeFilterInputSabania>;
  documentId?: InputMaybe<IDFilterInputSabania>;
  email?: InputMaybe<StringFilterInputSabania>;
  fullName?: InputMaybe<StringFilterInputSabania>;
  not?: InputMaybe<OrderFiltersInputSabania>;
  or?: InputMaybe<Array<InputMaybe<OrderFiltersInputSabania>>>;
  orderID?: InputMaybe<StringFilterInputSabania>;
  publishedAt?: InputMaybe<DateTimeFilterInputSabania>;
  travelers?: InputMaybe<IntFilterInputSabania>;
  updatedAt?: InputMaybe<DateTimeFilterInputSabania>;
};

export type OrderInputSabania = {
  amountPayed?: InputMaybe<Scalars['String']['input']>;
  apartment?: InputMaybe<Scalars['String']['input']>;
  checkin?: InputMaybe<Scalars['String']['input']>;
  checkout?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  orderID?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  travelers?: InputMaybe<Scalars['Int']['input']>;
};

export type PaginationSabania = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArgSabania = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export enum PublicationStatusSabania {
  DRAFT = 'DRAFT',
  PUBLISHED = 'PUBLISHED'
}

export type QuerySabania = {
  __typename?: 'Query';
  apartment?: Maybe<ApartmentSabania>;
  apartments: Array<Maybe<ApartmentSabania>>;
  apartments_connection?: Maybe<ApartmentEntityResponseCollectionSabania>;
  i18NLocale?: Maybe<I18NLocaleSabania>;
  i18NLocales: Array<Maybe<I18NLocaleSabania>>;
  i18NLocales_connection?: Maybe<I18NLocaleEntityResponseCollectionSabania>;
  location?: Maybe<LocationSabania>;
  locations: Array<Maybe<LocationSabania>>;
  locations_connection?: Maybe<LocationEntityResponseCollectionSabania>;
  me?: Maybe<UsersPermissionsMeSabania>;
  order?: Maybe<OrderSabania>;
  orders: Array<Maybe<OrderSabania>>;
  orders_connection?: Maybe<OrderEntityResponseCollectionSabania>;
  reviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflowSabania>;
  reviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStageSabania>;
  reviewWorkflowsWorkflowStages: Array<Maybe<ReviewWorkflowsWorkflowStageSabania>>;
  reviewWorkflowsWorkflowStages_connection?: Maybe<ReviewWorkflowsWorkflowStageEntityResponseCollectionSabania>;
  reviewWorkflowsWorkflows: Array<Maybe<ReviewWorkflowsWorkflowSabania>>;
  reviewWorkflowsWorkflows_connection?: Maybe<ReviewWorkflowsWorkflowEntityResponseCollectionSabania>;
  uploadFile?: Maybe<UploadFileSabania>;
  uploadFiles: Array<Maybe<UploadFileSabania>>;
  uploadFiles_connection?: Maybe<UploadFileEntityResponseCollectionSabania>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleSabania>;
  usersPermissionsRoles: Array<Maybe<UsersPermissionsRoleSabania>>;
  usersPermissionsRoles_connection?: Maybe<UsersPermissionsRoleEntityResponseCollectionSabania>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserSabania>;
  usersPermissionsUsers: Array<Maybe<UsersPermissionsUserSabania>>;
  usersPermissionsUsers_connection?: Maybe<UsersPermissionsUserEntityResponseCollectionSabania>;
};


export type QueryapartmentSabaniaArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatusSabania>;
};


export type QueryapartmentsSabaniaArgs = {
  filters?: InputMaybe<ApartmentFiltersInputSabania>;
  pagination?: InputMaybe<PaginationArgSabania>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatusSabania>;
};


export type Queryapartments_connectionSabaniaArgs = {
  filters?: InputMaybe<ApartmentFiltersInputSabania>;
  pagination?: InputMaybe<PaginationArgSabania>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatusSabania>;
};


export type Queryi18NLocaleSabaniaArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatusSabania>;
};


export type Queryi18NLocalesSabaniaArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInputSabania>;
  pagination?: InputMaybe<PaginationArgSabania>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatusSabania>;
};


export type Queryi18NLocales_connectionSabaniaArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInputSabania>;
  pagination?: InputMaybe<PaginationArgSabania>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatusSabania>;
};


export type QuerylocationSabaniaArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatusSabania>;
};


export type QuerylocationsSabaniaArgs = {
  filters?: InputMaybe<LocationFiltersInputSabania>;
  pagination?: InputMaybe<PaginationArgSabania>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatusSabania>;
};


export type Querylocations_connectionSabaniaArgs = {
  filters?: InputMaybe<LocationFiltersInputSabania>;
  pagination?: InputMaybe<PaginationArgSabania>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatusSabania>;
};


export type QueryorderSabaniaArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatusSabania>;
};


export type QueryordersSabaniaArgs = {
  filters?: InputMaybe<OrderFiltersInputSabania>;
  pagination?: InputMaybe<PaginationArgSabania>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatusSabania>;
};


export type Queryorders_connectionSabaniaArgs = {
  filters?: InputMaybe<OrderFiltersInputSabania>;
  pagination?: InputMaybe<PaginationArgSabania>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatusSabania>;
};


export type QueryreviewWorkflowsWorkflowSabaniaArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatusSabania>;
};


export type QueryreviewWorkflowsWorkflowStageSabaniaArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatusSabania>;
};


export type QueryreviewWorkflowsWorkflowStagesSabaniaArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInputSabania>;
  pagination?: InputMaybe<PaginationArgSabania>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatusSabania>;
};


export type QueryreviewWorkflowsWorkflowStages_connectionSabaniaArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInputSabania>;
  pagination?: InputMaybe<PaginationArgSabania>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatusSabania>;
};


export type QueryreviewWorkflowsWorkflowsSabaniaArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInputSabania>;
  pagination?: InputMaybe<PaginationArgSabania>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatusSabania>;
};


export type QueryreviewWorkflowsWorkflows_connectionSabaniaArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInputSabania>;
  pagination?: InputMaybe<PaginationArgSabania>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatusSabania>;
};


export type QueryuploadFileSabaniaArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatusSabania>;
};


export type QueryuploadFilesSabaniaArgs = {
  filters?: InputMaybe<UploadFileFiltersInputSabania>;
  pagination?: InputMaybe<PaginationArgSabania>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatusSabania>;
};


export type QueryuploadFiles_connectionSabaniaArgs = {
  filters?: InputMaybe<UploadFileFiltersInputSabania>;
  pagination?: InputMaybe<PaginationArgSabania>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatusSabania>;
};


export type QueryusersPermissionsRoleSabaniaArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatusSabania>;
};


export type QueryusersPermissionsRolesSabaniaArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInputSabania>;
  pagination?: InputMaybe<PaginationArgSabania>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatusSabania>;
};


export type QueryusersPermissionsRoles_connectionSabaniaArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInputSabania>;
  pagination?: InputMaybe<PaginationArgSabania>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatusSabania>;
};


export type QueryusersPermissionsUserSabaniaArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatusSabania>;
};


export type QueryusersPermissionsUsersSabaniaArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInputSabania>;
  pagination?: InputMaybe<PaginationArgSabania>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatusSabania>;
};


export type QueryusersPermissionsUsers_connectionSabaniaArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInputSabania>;
  pagination?: InputMaybe<PaginationArgSabania>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatusSabania>;
};

export type ReviewWorkflowsWorkflowSabania = {
  __typename?: 'ReviewWorkflowsWorkflow';
  contentTypes: Scalars['JSON']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  stageRequiredToPublish?: Maybe<ReviewWorkflowsWorkflowStageSabania>;
  stages: Array<Maybe<ReviewWorkflowsWorkflowStageSabania>>;
  stages_connection?: Maybe<ReviewWorkflowsWorkflowStageRelationResponseCollectionSabania>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ReviewWorkflowsWorkflowstagesSabaniaArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInputSabania>;
  pagination?: InputMaybe<PaginationArgSabania>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ReviewWorkflowsWorkflowstages_connectionSabaniaArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInputSabania>;
  pagination?: InputMaybe<PaginationArgSabania>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ReviewWorkflowsWorkflowEntityResponseCollectionSabania = {
  __typename?: 'ReviewWorkflowsWorkflowEntityResponseCollection';
  nodes: Array<ReviewWorkflowsWorkflowSabania>;
  pageInfo: PaginationSabania;
};

export type ReviewWorkflowsWorkflowFiltersInputSabania = {
  and?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowFiltersInputSabania>>>;
  contentTypes?: InputMaybe<JSONFilterInputSabania>;
  createdAt?: InputMaybe<DateTimeFilterInputSabania>;
  documentId?: InputMaybe<IDFilterInputSabania>;
  name?: InputMaybe<StringFilterInputSabania>;
  not?: InputMaybe<ReviewWorkflowsWorkflowFiltersInputSabania>;
  or?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowFiltersInputSabania>>>;
  publishedAt?: InputMaybe<DateTimeFilterInputSabania>;
  stageRequiredToPublish?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInputSabania>;
  stages?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInputSabania>;
  updatedAt?: InputMaybe<DateTimeFilterInputSabania>;
};

export type ReviewWorkflowsWorkflowInputSabania = {
  contentTypes?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  stageRequiredToPublish?: InputMaybe<Scalars['ID']['input']>;
  stages?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ReviewWorkflowsWorkflowStageSabania = {
  __typename?: 'ReviewWorkflowsWorkflowStage';
  color?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  workflow?: Maybe<ReviewWorkflowsWorkflowSabania>;
};

export type ReviewWorkflowsWorkflowStageEntityResponseCollectionSabania = {
  __typename?: 'ReviewWorkflowsWorkflowStageEntityResponseCollection';
  nodes: Array<ReviewWorkflowsWorkflowStageSabania>;
  pageInfo: PaginationSabania;
};

export type ReviewWorkflowsWorkflowStageFiltersInputSabania = {
  and?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInputSabania>>>;
  color?: InputMaybe<StringFilterInputSabania>;
  createdAt?: InputMaybe<DateTimeFilterInputSabania>;
  documentId?: InputMaybe<IDFilterInputSabania>;
  name?: InputMaybe<StringFilterInputSabania>;
  not?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInputSabania>;
  or?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInputSabania>>>;
  publishedAt?: InputMaybe<DateTimeFilterInputSabania>;
  updatedAt?: InputMaybe<DateTimeFilterInputSabania>;
  workflow?: InputMaybe<ReviewWorkflowsWorkflowFiltersInputSabania>;
};

export type ReviewWorkflowsWorkflowStageInputSabania = {
  color?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workflow?: InputMaybe<Scalars['ID']['input']>;
};

export type ReviewWorkflowsWorkflowStageRelationResponseCollectionSabania = {
  __typename?: 'ReviewWorkflowsWorkflowStageRelationResponseCollection';
  nodes: Array<ReviewWorkflowsWorkflowStageSabania>;
};

export type StringFilterInputSabania = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nei?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInputSabania>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type UploadFileSabania = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  related?: Maybe<Array<Maybe<GenericMorphSabania>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntityResponseCollectionSabania = {
  __typename?: 'UploadFileEntityResponseCollection';
  nodes: Array<UploadFileSabania>;
  pageInfo: PaginationSabania;
};

export type UploadFileFiltersInputSabania = {
  alternativeText?: InputMaybe<StringFilterInputSabania>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInputSabania>>>;
  caption?: InputMaybe<StringFilterInputSabania>;
  createdAt?: InputMaybe<DateTimeFilterInputSabania>;
  documentId?: InputMaybe<IDFilterInputSabania>;
  ext?: InputMaybe<StringFilterInputSabania>;
  formats?: InputMaybe<JSONFilterInputSabania>;
  hash?: InputMaybe<StringFilterInputSabania>;
  height?: InputMaybe<IntFilterInputSabania>;
  mime?: InputMaybe<StringFilterInputSabania>;
  name?: InputMaybe<StringFilterInputSabania>;
  not?: InputMaybe<UploadFileFiltersInputSabania>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInputSabania>>>;
  previewUrl?: InputMaybe<StringFilterInputSabania>;
  provider?: InputMaybe<StringFilterInputSabania>;
  provider_metadata?: InputMaybe<JSONFilterInputSabania>;
  publishedAt?: InputMaybe<DateTimeFilterInputSabania>;
  size?: InputMaybe<FloatFilterInputSabania>;
  updatedAt?: InputMaybe<DateTimeFilterInputSabania>;
  url?: InputMaybe<StringFilterInputSabania>;
  width?: InputMaybe<IntFilterInputSabania>;
};

export type UploadFileRelationResponseCollectionSabania = {
  __typename?: 'UploadFileRelationResponseCollection';
  nodes: Array<UploadFileSabania>;
};

export type UsersPermissionsCreateRolePayloadSabania = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayloadSabania = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInputSabania = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayloadSabania = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMeSabania;
};

export type UsersPermissionsMeSabania = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRoleSabania>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRoleSabania = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayloadSabania = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermissionSabania = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRoleSabania>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionFiltersInputSabania = {
  action?: InputMaybe<StringFilterInputSabania>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInputSabania>>>;
  createdAt?: InputMaybe<DateTimeFilterInputSabania>;
  documentId?: InputMaybe<IDFilterInputSabania>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInputSabania>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInputSabania>>>;
  publishedAt?: InputMaybe<DateTimeFilterInputSabania>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInputSabania>;
  updatedAt?: InputMaybe<DateTimeFilterInputSabania>;
};

export type UsersPermissionsPermissionRelationResponseCollectionSabania = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  nodes: Array<UsersPermissionsPermissionSabania>;
};

export type UsersPermissionsRegisterInputSabania = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRoleSabania = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documentId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  permissions: Array<Maybe<UsersPermissionsPermissionSabania>>;
  permissions_connection?: Maybe<UsersPermissionsPermissionRelationResponseCollectionSabania>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users: Array<Maybe<UsersPermissionsUserSabania>>;
  users_connection?: Maybe<UsersPermissionsUserRelationResponseCollectionSabania>;
};


export type UsersPermissionsRolepermissionsSabaniaArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInputSabania>;
  pagination?: InputMaybe<PaginationArgSabania>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRolepermissions_connectionSabaniaArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInputSabania>;
  pagination?: InputMaybe<PaginationArgSabania>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleusersSabaniaArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInputSabania>;
  pagination?: InputMaybe<PaginationArgSabania>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleusers_connectionSabaniaArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInputSabania>;
  pagination?: InputMaybe<PaginationArgSabania>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntityResponseCollectionSabania = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  nodes: Array<UsersPermissionsRoleSabania>;
  pageInfo: PaginationSabania;
};

export type UsersPermissionsRoleFiltersInputSabania = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInputSabania>>>;
  createdAt?: InputMaybe<DateTimeFilterInputSabania>;
  description?: InputMaybe<StringFilterInputSabania>;
  documentId?: InputMaybe<IDFilterInputSabania>;
  name?: InputMaybe<StringFilterInputSabania>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInputSabania>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInputSabania>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInputSabania>;
  publishedAt?: InputMaybe<DateTimeFilterInputSabania>;
  type?: InputMaybe<StringFilterInputSabania>;
  updatedAt?: InputMaybe<DateTimeFilterInputSabania>;
  users?: InputMaybe<UsersPermissionsUserFiltersInputSabania>;
};

export type UsersPermissionsRoleInputSabania = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayloadSabania = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUserSabania = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  email: Scalars['String']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRoleSabania>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntityResponseSabania = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserSabania>;
};

export type UsersPermissionsUserEntityResponseCollectionSabania = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  nodes: Array<UsersPermissionsUserSabania>;
  pageInfo: PaginationSabania;
};

export type UsersPermissionsUserFiltersInputSabania = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInputSabania>>>;
  blocked?: InputMaybe<BooleanFilterInputSabania>;
  confirmed?: InputMaybe<BooleanFilterInputSabania>;
  createdAt?: InputMaybe<DateTimeFilterInputSabania>;
  documentId?: InputMaybe<IDFilterInputSabania>;
  email?: InputMaybe<StringFilterInputSabania>;
  not?: InputMaybe<UsersPermissionsUserFiltersInputSabania>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInputSabania>>>;
  provider?: InputMaybe<StringFilterInputSabania>;
  publishedAt?: InputMaybe<DateTimeFilterInputSabania>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInputSabania>;
  updatedAt?: InputMaybe<DateTimeFilterInputSabania>;
  username?: InputMaybe<StringFilterInputSabania>;
};

export type UsersPermissionsUserInputSabania = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollectionSabania = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  nodes: Array<UsersPermissionsUserSabania>;
};
