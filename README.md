This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, set up the certificate needed for our server to use HTTPS:

```bash
cd ~
npm i mkcert
mkcert create-ca
mkcert create-cert
```

This will create a Certificate Authority and certificate that your browser will
trust to use HTTPS. The default settings are sufficient for localhost. On Windows, you can
double-click on the .cert file for the ca (`ca.crt`) and certificate(`cert.crt`). This will open
up the Certificate Manager and will tell you these certificates can't be verified. Click the button
to install the certificates and browse for the Trusted Certificate Authority folder to install them to.
Now your browser will trust sites signed with this certificate from this CA. Reboot your computer to complete it.
In server.js, you will need to change the paths for the certificate and its key to the ones on your local
machine. 

_TODO: Change this to an env variable so we don't have to alter the file._

Next, try running the server to see if it worked properly. 

```bash
npm start
```

You need to run this instead of `npm run dev` because it accesses the `server.js` file that allows us to serve our website at `https://localhost:80`
instead of `http://localhost:80` so that our embedded Twitch streams work properly.

Open [https://localhost:80](http://localhost:800) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
