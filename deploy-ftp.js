const FtpDeploy = require('ftp-deploy');
const ftpDeploy = new FtpDeploy();

const config = {
  user: "u581183335",
  password: process.env.FTP_PASSWORD, // Set this in environment
  host: "ayahmotionpictures.com",
  port: 21,
  localRoot: __dirname + "/dist",
  remoteRoot: "/public_html/",
  include: ["*", "**/*"],
  exclude: [
    "dist/**/*.map",
    "node_modules/**",
    "node_modules/**/.*",
    ".git/**"
  ],
  deleteRemote: true,
  forcePasv: true
};

console.log('Starting deployment to Hostinger...');
console.log('Local root:', config.localRoot);
console.log('Remote root:', config.remoteRoot);

ftpDeploy
  .deploy(config)
  .then(res => {
    console.log('✅ Deployment completed successfully!');
    console.log('Files uploaded:', res.length);
    console.log('🌐 Your site should be live at: https://ayahmotionpictures.com');
  })
  .catch(err => {
    console.error('❌ Deployment failed:', err);
    process.exit(1);
  });

// Log deployment progress
ftpDeploy.on('uploading', function(data) {
  console.log(`📤 Uploading: ${data.filename} (${data.transferredFileCount}/${data.totalFilesCount})`);
});

ftpDeploy.on('uploaded', function(data) {
  console.log(`✅ Uploaded: ${data.filename}`);
});

ftpDeploy.on('log', function(data) {
  console.log('📝 Log:', data);
});