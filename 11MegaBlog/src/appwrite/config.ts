import conf from '../conf/conf';
import { Client, ID, Databases, Storage, Query, Models } from 'appwrite';

interface PostData {
  title: string;
  slug: string;
  content: string;
  featuredImage: string;
  status: string;
  userId: string;
}

interface UpdatePostData extends Omit<PostData, 'userId'> {}

export class Service {
  private client: Client;
  private databases: Databases;
  private bucket: Storage;

  constructor() {
    this.client = new Client()
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({
    title,
    slug,
    content,
    featuredImage,
    status,
    userId
  }: PostData): Promise<Models.Document | undefined> {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        { title, content, featuredImage, status, userId }
      );
    } catch (error) {
      console.error('Appwrite service :: createPost :: error', error);
    }
  }

  async updatePost({
    title,
    slug,
    content,
    featuredImage,
    status
  }: UpdatePostData): Promise<Models.Document | undefined> {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        { title, content, featuredImage, status }
      );
    } catch (error) {
      console.error('Appwrite service :: updatePost :: error', error);
    }
  }

  async deletePost(slug: string): Promise<boolean> {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.error('Appwrite service :: deletePost :: error', error);
      return false;
    }
  }

  async getPost(slug: string): Promise<Models.Document | undefined> {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.error('Appwrite service :: getPost :: error', error);
    }
  }

  async getPosts(
    queries: string[] = [Query.equal('status', 'active')]
  ): Promise<Models.DocumentList<Models.Document> | false> {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.error('Appwrite service :: getPosts :: error', error);
      return false;
    }
  }

  async uploadFile(file: File): Promise<Models.File | false> {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.error('Appwrite service :: uploadFile :: error', error);
      return false;
    }
  }

  async deleteFile(fileId: string): Promise<boolean> {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.error('Appwrite service :: deleteFile :: error', error);
      return false;
    }
  }

  getFilePreview(fileId: string): string | false {
    try {
      return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
    } catch (error) {
      console.error('Appwrite service :: getFilePreview :: error', error);
      return false;
    }
  }
}

const service = new Service();
export default service;
