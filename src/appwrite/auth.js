import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client()
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);

            if (userAccount) {
                return this.login({ email, password }); // why this.login ?? watch again
            } else {
                return userAccount;
            }
        }
        catch (error) {
            console.log(error);
            
        }
    }

    async login({email, password}){
        try{
            return await this.account.createEmailPasswordSession(email, password);
        }
        catch(error){
            console.log(error);
        }
    }

    async getCurrentUser(){
        try {
            console.log("Session already exists, skipping login.");
            return await this.account.get();
        } catch (error) {
            console.log(error);
            console.log("No active session or failed to fetch user:", error);
        }

        return null;
    }

    async logout(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log(error)
        }
    }

}

const authService = new AuthService();

export default authService;