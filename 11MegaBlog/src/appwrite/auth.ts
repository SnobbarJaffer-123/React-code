
import conf from '../conf/conf.ts';
import { Client, Account, ID } from 'appwrite';

interface AuthCredentials {
  email: string;
  password: string;
  name?: string;
}

export class AuthService {
  client = new Client();
  account: Account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }: AuthCredentials): Promise<any> {
    try {
      const userAccount = await this.account.create(ID.unique(), email, password, name);
      if (userAccount) {
        return this.login({ email, password });
      }
      return;
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }: { email: string; password: string }): Promise<any> {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser(): Promise<any | null> {
    try {
      return await this.account.get();
    } catch (error) {
      console.log('Appwrite service :: getCurrentUser :: error', error);
      return null;
    }
  }

  async logout():Promise<any | null>{
    try{
        await this.account.deleteSessions()
    }
    catch(error){
        console.log("Appwrite service :: logout :: error",error)
    }
  }
}

const authService = new AuthService();
export default authService;
