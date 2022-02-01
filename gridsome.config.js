// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: 'gridsome-source-google-sheets',
      options: {
        sheetId: '1Kpe3pSecKL6cdfzhdtqdQB5MBvZNNRrFAw2znHiXdGc', 
        apiKey: 'AIzaSyAU_P5K0HNtAcxavdM7zVSP5hcn-r1bHMA',
        // type: 'TYPE_NAME', //Optional - default is googleSheet. Used for graphql queries.
      }
    }
  ]
}
