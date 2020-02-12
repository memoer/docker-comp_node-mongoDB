import db from './DBConnection';

const openHandler = () => {
  console.log(`Success, DB Connect -> ${process.env.MONGO_URL}`);
};
db.once('open', openHandler);
db.on('error', err => {
  console.log(`env -> ${process.env.MONGO_URL}`);
});
