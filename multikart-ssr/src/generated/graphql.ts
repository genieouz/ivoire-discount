import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Arbitrary object */
  Any: any;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};




export type AttachmentRecord = {
  __typename?: 'AttachmentRecord';
  id: Scalars['ID'];
  sizeB: Scalars['Int'];
  mimeType: Scalars['String'];
  filename: Scalars['String'];
  bucketRef: Scalars['ID'];
  extension: Scalars['String'];
};

export type CardItem = {
  __typename?: 'CardItem';
  id: Scalars['String'];
  name: Scalars['String'];
  quantity: Scalars['Float'];
  price: Scalars['Float'];
};

export type Category = {
  __typename?: 'Category';
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  owner: Scalars['ID'];
  parent?: Maybe<Category>;
  status: CategoryStatus;
  children: Array<Category>;
  price: Scalars['Float'];
  minPrice: Scalars['Float'];
  maxPrice: Scalars['Float'];
};

export type CategoryInput = {
  name: Scalars['String'];
  parent?: Maybe<Scalars['ID']>;
  status: Scalars['String'];
};

export enum CategoryStatus {
  Enabled = 'ENABLED',
  Disabled = 'DISABLED',
  Deleted = 'DELETED'
}

export type ChatMessage = {
  __typename?: 'ChatMessage';
  id: Scalars['ID'];
};

export type ChatMessageInput = {
  id: Scalars['String'];
};

export type ClientFilterInput = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  filter?: Maybe<Scalars['Any']>;
  search?: Maybe<Scalars['String']>;
  orderBy?: Maybe<OrderByInput>;
};

export type Comment = {
  __typename?: 'Comment';
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  discussionId: Scalars['String'];
  content: Scalars['String'];
  postedBy: Scalars['String'];
};

export type CommentInput = {
  discussionId: Scalars['String'];
  content: Scalars['String'];
  postedBy: Scalars['String'];
};


export type DiscussionMessage = {
  __typename?: 'DiscussionMessage';
  id: Scalars['ID'];
};

export type DiscussionMessageInput = {
  id: Scalars['String'];
};

export type ForumMessage = {
  __typename?: 'ForumMessage';
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  id: Scalars['ID'];
  subject: Scalars['String'];
  content: Scalars['String'];
  postedBy: Scalars['String'];
  comments: Array<Comment>;
};

export type ForumMessageInput = {
  subject: Scalars['String'];
  content: Scalars['String'];
  postedBy: Scalars['String'];
};

export type GqlTimestamp = {
  __typename?: 'GqlTimestamp';
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type ImageSizes = {
  __typename?: 'ImageSizes';
  sm?: Maybe<Scalars['ID']>;
  md?: Maybe<Scalars['ID']>;
  lg?: Maybe<Scalars['ID']>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createProduct: Product;
  updateProduct: Product;
  removeProduct: Scalars['Boolean'];
  createCategory: Category;
  updateCategory: Category;
  removeCategory: Scalars['Boolean'];
  updateCurrentUserPassword: Scalars['Boolean'];
  closeAccount: Scalars['Boolean'];
  updateUser: User;
  register: Session;
  updatePassword: Scalars['Boolean'];
  createTask: Task;
  updateTask: Task;
  removeTask: Scalars['Boolean'];
  createChatMessage: ChatMessage;
  updateChatMessage: ChatMessage;
  removeChatMessage: Scalars['Boolean'];
  createDiscussionMessage: DiscussionMessage;
  updateDiscussionMessage: DiscussionMessage;
  removeDiscussionMessage: Scalars['Boolean'];
  chargeCard: Payment;
  createForumMessage: ForumMessage;
  updateForumMessage: ForumMessage;
  removeForumMessage: Scalars['Boolean'];
  createComment: Comment;
  updateComment: Comment;
  removeComment: Scalars['Boolean'];
};


export type MutationCreateProductArgs = {
  productInput: ProductInput;
};


export type MutationUpdateProductArgs = {
  productInput: UpdateProductInput;
  productId: Scalars['ID'];
};


export type MutationRemoveProductArgs = {
  productId: Scalars['ID'];
};


export type MutationCreateCategoryArgs = {
  categoryInput: CategoryInput;
};


export type MutationUpdateCategoryArgs = {
  categoryInput: UpdateCategoryInput;
  categoryId: Scalars['ID'];
};


export type MutationRemoveCategoryArgs = {
  categoryId: Scalars['ID'];
};


export type MutationUpdateCurrentUserPasswordArgs = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  userInput: UserInput;
};


export type MutationRegisterArgs = {
  registerInput: RegisterInput;
};


export type MutationUpdatePasswordArgs = {
  updatePasswordDto: UpdatePasswordDto;
};


export type MutationCreateTaskArgs = {
  taskInput: TaskInput;
};


export type MutationUpdateTaskArgs = {
  taskInput: UpdateTaskInput;
  taskId: Scalars['ID'];
};


export type MutationRemoveTaskArgs = {
  taskId: Scalars['ID'];
};


export type MutationCreateChatMessageArgs = {
  chatMessageInput: ChatMessageInput;
};


export type MutationUpdateChatMessageArgs = {
  chatMessageInput: UpdateChatMessageInput;
  chatMessageId: Scalars['ID'];
};


export type MutationRemoveChatMessageArgs = {
  chatMessageId: Scalars['ID'];
};


export type MutationCreateDiscussionMessageArgs = {
  discussionMessageInput: DiscussionMessageInput;
};


export type MutationUpdateDiscussionMessageArgs = {
  discussionMessageInput: UpdateDiscussionMessageInput;
  discussionMessageId: Scalars['ID'];
};


export type MutationRemoveDiscussionMessageArgs = {
  discussionMessageId: Scalars['ID'];
};


export type MutationChargeCardArgs = {
  paymentInput: Scalars['Any'];
};


export type MutationCreateForumMessageArgs = {
  forumMessageInput: ForumMessageInput;
};


export type MutationUpdateForumMessageArgs = {
  forumMessageInput: UpdateForumMessageInput;
  forumMessageId: Scalars['ID'];
};


export type MutationRemoveForumMessageArgs = {
  forumMessageId: Scalars['ID'];
};


export type MutationCreateCommentArgs = {
  commentInput: CommentInput;
};


export type MutationUpdateCommentArgs = {
  commentInput: UpdateCommentInput;
  commentId: Scalars['ID'];
};


export type MutationRemoveCommentArgs = {
  commentId: Scalars['ID'];
};

/** OrderBy direction */
export enum OrderByDirection {
  Asc = 'Asc',
  Desc = 'Desc'
}

export type OrderByInput = {
  property: Scalars['String'];
  direction: OrderByDirection;
};

export type Payment = {
  __typename?: 'Payment';
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  town?: Maybe<Scalars['String']>;
  postalcode?: Maybe<Scalars['String']>;
  carditems?: Maybe<Array<CardItem>>;
  paymentInfos?: Maybe<Scalars['Any']>;
  charge?: Maybe<Scalars['Any']>;
};

export type PaymentInput = {
  id: Scalars['String'];
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  code?: Maybe<Scalars['String']>;
  quota?: Maybe<Scalars['Float']>;
  category?: Maybe<Category>;
  cover?: Maybe<AttachmentRecord>;
  gallery?: Maybe<Array<AttachmentRecord>>;
  variants?: Maybe<Array<Scalars['Any']>>;
};

export type ProductBill = {
  __typename?: 'ProductBill';
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  town?: Maybe<Scalars['String']>;
  postalcode?: Maybe<Scalars['String']>;
  cartItem?: Maybe<CardItem>;
  paymentInfos?: Maybe<Scalars['Any']>;
  charge?: Maybe<Scalars['Any']>;
};

export type ProductInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  price: Scalars['Float'];
  category?: Maybe<Scalars['ID']>;
};

export type Query = {
  __typename?: 'Query';
  fetchMyProduct: Product;
  fetchMyProducts: Array<Product>;
  fetchMyCategories: Array<Category>;
  fetchCategory: Category;
  fetchCategoryByName: Category;
  fetchCategories: Array<Category>;
  fetchCategoriesForMarket: Array<Category>;
  fetchMainCategoriesForMarket: Array<Category>;
  fetchProduct: Product;
  fetchProducts: Array<Product>;
  fetchCurrentUser: User;
  login: Session;
  resetPassword: Scalars['String'];
  fetchTask: Task;
  fetchTasks: Array<Task>;
  fetchChatMessage: ChatMessage;
  fetchChatMessages: Array<ChatMessage>;
  fetchDiscussionMessage: DiscussionMessage;
  fetchDiscussionMessages: Array<DiscussionMessage>;
  fetchProviderBills: Array<ProductBill>;
  fetchForumMessage: ForumMessage;
  fetchForumMessages: Array<ForumMessage>;
  fetchComment: Comment;
  fetchComments: Array<Comment>;
};


export type QueryFetchMyProductArgs = {
  productId: Scalars['ID'];
};


export type QueryFetchMyProductsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchMyCategoriesArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchCategoryArgs = {
  categoryId: Scalars['ID'];
};


export type QueryFetchCategoryByNameArgs = {
  categoryName: Scalars['String'];
};


export type QueryFetchCategoriesArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchProductArgs = {
  productId: Scalars['ID'];
};


export type QueryFetchProductsArgs = {
  categoryId?: Maybe<Scalars['ID']>;
};


export type QueryLoginArgs = {
  loginInput: LoginInput;
};


export type QueryResetPasswordArgs = {
  email: Scalars['String'];
};


export type QueryFetchTaskArgs = {
  taskId: Scalars['ID'];
};


export type QueryFetchTasksArgs = {
  clientFilter: ClientFilterInput;
};


export type QueryFetchChatMessageArgs = {
  chatMessageId: Scalars['ID'];
};


export type QueryFetchChatMessagesArgs = {
  clientFilter: ClientFilterInput;
};


export type QueryFetchDiscussionMessageArgs = {
  discussionMessageId: Scalars['ID'];
};


export type QueryFetchDiscussionMessagesArgs = {
  clientFilter: ClientFilterInput;
};


export type QueryFetchForumMessageArgs = {
  forumMessageId: Scalars['ID'];
};


export type QueryFetchCommentArgs = {
  commentId: Scalars['ID'];
};


export type QueryFetchCommentsArgs = {
  clientFilter: ClientFilterInput;
};

export type RegisterInput = {
  password: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type Session = {
  __typename?: 'Session';
  token: Scalars['String'];
  user: User;
};

export type Task = {
  __typename?: 'Task';
  id: Scalars['ID'];
};

export type TaskInput = {
  id: Scalars['String'];
};

export type UpdateCategoryInput = {
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<Scalars['ID']>;
  status: CategoryStatus;
};

export type UpdateChatMessageInput = {
  id: Scalars['String'];
};

export type UpdateCommentInput = {
  id: Scalars['String'];
};

export type UpdateDiscussionMessageInput = {
  id: Scalars['String'];
};

export type UpdateForumMessageInput = {
  subject: Scalars['String'];
  content: Scalars['String'];
};

export type UpdatePasswordDto = {
  password: Scalars['String'];
  resetToken: Scalars['String'];
  resetCode: Scalars['Float'];
};

export type UpdatePaymentInput = {
  id: Scalars['String'];
};

export type UpdateProductInput = {
  id: Scalars['String'];
};

export type UpdateTaskInput = {
  id: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  avatar?: Maybe<ImageSizes>;
};

export type UserInput = {
  phoneNumber?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type ChargeCardMutationVariables = Exact<{
  paymentInput: Scalars['Any'];
}>;


export type ChargeCardMutation = (
  { __typename?: 'Mutation' }
  & { chargeCard: (
    { __typename?: 'Payment' }
    & Pick<Payment, 'firstname' | 'lastname' | 'email' | 'phone' | 'address' | 'country' | 'town' | 'postalcode' | 'paymentInfos' | 'charge'>
    & { carditems?: Maybe<Array<(
      { __typename?: 'CardItem' }
      & Pick<CardItem, 'id' | 'name' | 'price' | 'quantity'>
    )>> }
  ) }
);

export type FetchProductsQueryVariables = Exact<{
  categoryId?: Maybe<Scalars['ID']>;
}>;


export type FetchProductsQuery = (
  { __typename?: 'Query' }
  & { fetchProducts: Array<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'name' | 'description' | 'price' | 'type' | 'quota' | 'variants'>
    & { category?: Maybe<(
      { __typename?: 'Category' }
      & Pick<Category, 'name'>
    )>, cover?: Maybe<(
      { __typename?: 'AttachmentRecord' }
      & Pick<AttachmentRecord, 'id'>
    )>, gallery?: Maybe<Array<(
      { __typename?: 'AttachmentRecord' }
      & Pick<AttachmentRecord, 'id'>
    )>> }
  )> }
);

export type FetchCategoryByNameQueryVariables = Exact<{
  categoryName: Scalars['String'];
}>;


export type FetchCategoryByNameQuery = (
  { __typename?: 'Query' }
  & { fetchCategoryByName: (
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'name' | 'createdAt' | 'minPrice' | 'maxPrice'>
    & { parent?: Maybe<(
      { __typename?: 'Category' }
      & Pick<Category, 'id' | 'name'>
    )> }
  ) }
);

export type FetchCategoriesForMarketQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchCategoriesForMarketQuery = (
  { __typename?: 'Query' }
  & { fetchCategoriesForMarket: Array<(
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'name' | 'price' | 'minPrice' | 'maxPrice' | 'status' | 'createdAt' | 'updatedAt'>
    & { parent?: Maybe<(
      { __typename?: 'Category' }
      & Pick<Category, 'id' | 'name'>
    )> }
  )> }
);

export type FetchMainCategoriesForMarketQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchMainCategoriesForMarketQuery = (
  { __typename?: 'Query' }
  & { fetchMainCategoriesForMarket: Array<(
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'name' | 'price' | 'minPrice' | 'maxPrice' | 'status' | 'createdAt' | 'updatedAt'>
    & { children: Array<(
      { __typename?: 'Category' }
      & Pick<Category, 'id' | 'name'>
    )> }
  )> }
);

export type FetchForumMessagesQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchForumMessagesQuery = (
  { __typename?: 'Query' }
  & { fetchForumMessages: Array<(
    { __typename?: 'ForumMessage' }
    & Pick<ForumMessage, 'id' | 'content' | 'postedBy' | 'subject' | 'createdAt'>
    & { comments: Array<(
      { __typename?: 'Comment' }
      & Pick<Comment, 'postedBy' | 'content' | 'createdAt'>
    )> }
  )> }
);

export type CreateForumMessageMutationVariables = Exact<{
  forumMessageInput: ForumMessageInput;
}>;


export type CreateForumMessageMutation = (
  { __typename?: 'Mutation' }
  & { createForumMessage: (
    { __typename?: 'ForumMessage' }
    & Pick<ForumMessage, 'id' | 'content' | 'postedBy' | 'subject' | 'createdAt'>
    & { comments: Array<(
      { __typename?: 'Comment' }
      & Pick<Comment, 'postedBy' | 'content' | 'createdAt'>
    )> }
  ) }
);

export type CreateCommentMutationVariables = Exact<{
  commentInput: CommentInput;
}>;


export type CreateCommentMutation = (
  { __typename?: 'Mutation' }
  & { createComment: (
    { __typename?: 'Comment' }
    & Pick<Comment, 'content' | 'postedBy' | 'discussionId' | 'createdAt'>
  ) }
);

export const ChargeCardDocument = gql`
    mutation chargeCard($paymentInput: Any!) {
  chargeCard(paymentInput: $paymentInput) {
    firstname
    lastname
    email
    phone
    address
    country
    town
    postalcode
    carditems {
      id
      name
      price
      quantity
    }
    paymentInfos
    charge
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ChargeCardGQL extends Apollo.Mutation<ChargeCardMutation, ChargeCardMutationVariables> {
    document = ChargeCardDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FetchProductsDocument = gql`
    query FetchProducts($categoryId: ID) {
  fetchProducts(categoryId: $categoryId) {
    id
    name
    description
    price
    type
    quota
    category {
      name
    }
    cover {
      id
    }
    gallery {
      id
    }
    variants
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FetchProductsGQL extends Apollo.Query<FetchProductsQuery, FetchProductsQueryVariables> {
    document = FetchProductsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FetchCategoryByNameDocument = gql`
    query FetchCategoryByName($categoryName: String!) {
  fetchCategoryByName(categoryName: $categoryName) {
    id
    name
    parent {
      id
      name
    }
    createdAt
    minPrice
    maxPrice
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FetchCategoryByNameGQL extends Apollo.Query<FetchCategoryByNameQuery, FetchCategoryByNameQueryVariables> {
    document = FetchCategoryByNameDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FetchCategoriesForMarketDocument = gql`
    query FetchCategoriesForMarket {
  fetchCategoriesForMarket {
    id
    name
    price
    minPrice
    maxPrice
    status
    parent {
      id
      name
    }
    createdAt
    updatedAt
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FetchCategoriesForMarketGQL extends Apollo.Query<FetchCategoriesForMarketQuery, FetchCategoriesForMarketQueryVariables> {
    document = FetchCategoriesForMarketDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FetchMainCategoriesForMarketDocument = gql`
    query FetchMainCategoriesForMarket {
  fetchMainCategoriesForMarket {
    id
    name
    price
    minPrice
    maxPrice
    status
    children {
      id
      name
    }
    createdAt
    updatedAt
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FetchMainCategoriesForMarketGQL extends Apollo.Query<FetchMainCategoriesForMarketQuery, FetchMainCategoriesForMarketQueryVariables> {
    document = FetchMainCategoriesForMarketDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FetchForumMessagesDocument = gql`
    query FetchForumMessages {
  fetchForumMessages {
    id
    content
    postedBy
    subject
    createdAt
    comments {
      postedBy
      content
      createdAt
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FetchForumMessagesGQL extends Apollo.Query<FetchForumMessagesQuery, FetchForumMessagesQueryVariables> {
    document = FetchForumMessagesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateForumMessageDocument = gql`
    mutation CreateForumMessage($forumMessageInput: ForumMessageInput!) {
  createForumMessage(forumMessageInput: $forumMessageInput) {
    id
    content
    postedBy
    subject
    createdAt
    comments {
      postedBy
      content
      createdAt
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateForumMessageGQL extends Apollo.Mutation<CreateForumMessageMutation, CreateForumMessageMutationVariables> {
    document = CreateForumMessageDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateCommentDocument = gql`
    mutation CreateComment($commentInput: CommentInput!) {
  createComment(commentInput: $commentInput) {
    content
    postedBy
    discussionId
    createdAt
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateCommentGQL extends Apollo.Mutation<CreateCommentMutation, CreateCommentMutationVariables> {
    document = CreateCommentDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }