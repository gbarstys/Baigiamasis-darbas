import axios from 'axios';
import { Crudentials, TemporaryAdmin, Admin } from '../../types';

export type AuthPromise = (crudentials: Crudentials) => Promise < Admin >;

namespace AuthService {
  export const login: AuthPromise = async ({ username, password }: Crudentials) => {
    const { data: tempAdmins } = await axios
      .get<TemporaryAdmin[]>(`http://localhost:8000/admins?username=${username}`);
    if (tempAdmins.length === 0) {
      throw new Error('Admin with such username was not found');
    }
    const { password: adminPassword, ...admin } = tempAdmins[0];

    if (adminPassword !== password) {
      throw new Error('Wrong password, try again');
    }

    return admin;
  };
}

export default AuthService;
