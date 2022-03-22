module.exports = ({ env }) => ({
<<<<<<< HEAD

  upload: {
      config:{
      provider: 'cloudinary',
      providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        
      },
  },
},
});
=======
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});
>>>>>>> 6928b0dcff0b37541573ea3df3624fa9b8da0a99
