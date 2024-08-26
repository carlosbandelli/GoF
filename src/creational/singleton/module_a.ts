import { MyDatabaseModule } from './db/my-database-module';

const myDatabaseClassic = new MyDatabaseModule();
myDatabaseClassic.add({ name: 'Max', age: 30 });
myDatabaseClassic.add({ name: 'Carlos', age: 50 });
myDatabaseClassic.add({ name: 'Nice', age: 60 });
myDatabaseClassic.show();
