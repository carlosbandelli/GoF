import { MyDatabaseModule } from './db/my-database-module';
import './module_a';
const myDatabaseClassic = new MyDatabaseModule();
myDatabaseClassic.add({ name: 'Escanor', age: 30 });
myDatabaseClassic.add({ name: 'Meliodas', age: 50 });
myDatabaseClassic.add({ name: 'Slime', age: 60 });
myDatabaseClassic.show();
