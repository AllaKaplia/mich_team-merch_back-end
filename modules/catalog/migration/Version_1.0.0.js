const { execute } = require('@evershop/postgres-query-builder');


module.exports = exports = async (connection) => {
  await execute(connection, `CREATE TABLE \`product_comment\` (
  \`comment_id\` int(10) unsigned NOT NULL AUTO_INCREMENT,
  \`product_id\` int(10) unsigned NOT NULL,
  \`user_name\` varchar(255) NOT NULL,
  \`comment\` text DEFAULT NULL,
  \`created_at\` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (\`comment_id\`),
  CONSTRAINT \`FK_PRODUCT_COMMENT\` FOREIGN KEY (\`product_id\`) REFERENCES \`product\` (\`product_id\`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
`);
};