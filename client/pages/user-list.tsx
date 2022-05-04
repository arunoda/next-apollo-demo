import Client from '../components/Client/Client';
import Users from '../components/Users/Users';

export default function UserList() {
  return (
    <div>
      <main>
        <Client>
          <Users />
        </Client>
      </main>
    </div>
  );
}
