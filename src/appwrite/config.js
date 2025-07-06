import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }


    async createPost({ title, slug, content, featuredImage, status, userId, authorName }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                // ID.unique(),
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                    authorName,
                }
            )
        } catch (error) {
            console.log(error);
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,  // treated as doc-ID,  you can use ID.unique() also
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log(error);
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
            return true
        } catch (error) {
            console.log(error);
            return false
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
        } catch (error) {
            console.log(error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log(error);
            return false
        }
    }



    // File Upload Service

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                // [Permission.read(Role.any())],
                file
            )
        } catch (error) {
            console.error("Appwrite upload error:", error);
            return null; // <-- add this!

        }
    }
    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFileView( // earlier I was using getFilePreview which is paid feature of appwrite
            conf.appwriteBucketId,
            fileId
        )
    }

    // getFilePreview(fileId) {
    //     if (!fileId || typeof fileId !== "string") {
    //         console.warn("⚠️ getFilePreview called with invalid fileId:", fileId);
    //         return null;
    //     }

    //     try {
    //         return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
    //     } catch (error) {
    //         console.error("Appwrite :: getFilePreview error", error);
    //         return null;
    //     }
    // }



}

const service = new Service()
export default service