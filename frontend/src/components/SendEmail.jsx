// import React from "react";
// import express from "express";
// import nodemailer from "nodemailer";
// import cors from "cors";

// const app = express();
// const port = 5000;
// require("dotenv").config();

// app.use(cors());
// app.use(express.json({ limit: "25mb" }));
// app.use(express.urlencoded({ limit: "25mb" }));
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   next();
// });

// function sendEmail({ recipient_email, OTP }) {
//   return new Promise((resolve, reject) => {
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.MY_EMAIL,
//         pass: process.env.MY_PASSWORD,
//       },
//     });

//     const mailConfigs = {
//       from: process.env.MY_EMAIL,
//       to: recipient_email,
//       subject: "KODING 101 PASSWORD RECOVERY",
//       html: (
//         <html lang="en">
//           <head>
//             <meta charSet="UTF-8" />
//             <title>CodePen - OTP Email Template</title>
//           </head>
//           <body>
//             <div
//               style={{
//                 fontFamily: "Helvetica, Arial, sans-serif",
//                 minWidth: "1000px",
//                 overflow: "auto",
//                 lineHeight: "2",
//               }}
//             >
//               <div
//                 style={{ margin: "50px auto", width: "70%", padding: "20px 0" }}
//               >
//                 <div style={{ borderBottom: "1px solid #eee" }}>
//                   <a
//                     href=""
//                     style={{
//                       fontSize: "1.4em",
//                       color: "#00466a",
//                       textDecoration: "none",
//                       fontWeight: 600,
//                     }}
//                   >
//                     Koding 101
//                   </a>
//                 </div>
//                 <p style={{ fontSize: "1.1em" }}>Salut,</p>
//                 <p>
//                   Merci d'avoir choisi Koding 101. Utilisez le code OTP suivant
//                   pour compléter la procédure de récupération de mot de passe.
//                   Le code OTP est valide pendant 5 minutes.
//                 </p>
//                 <h2
//                   style={{
//                     background: "#00466a",
//                     margin: 0,
//                     auto: "max-content",
//                     padding: "0 10px",
//                     color: "#fff",
//                     borderRadius: "4px",
//                   }}
//                 >
//                   {OTP}
//                 </h2>
//                 <p style={{ fontSize: "0.9em" }}>
//                   Cordialement,
//                   <br />
//                   Koding 101
//                 </p>
//                 <hr style={{ border: "none", borderTop: "1px solid #eee" }} />
//                 <div
//                   style={{
//                     float: "right",
//                     padding: "8px 0",
//                     color: "#aaa",
//                     fontSize: "0.8em",
//                     lineHeight: "1",
//                     fontWeight: 300,
//                   }}
//                 >
//                   <p>Koding 101 Inc</p>
//                   <p>1600 Amphitheatre Parkway</p>
//                   <p>California</p>
//                 </div>
//               </div>
//             </div>
//           </body>
//         </html>
//       ),
//     };

//     transporter.sendMail(mailConfigs, function (error, info) {
//       if (error) {
//         console.log(error);
//         return reject({ message: "Une erreur s'est produite" });
//       }
//       return resolve({ message: "Email envoyé avec succès" });
//     });
//   });
// }

// app.get("/", (req, res) => {
//   console.log(process.env.MY_EMAIL);
// });

// app.post("/send_recovery_email", (req, res) => {
//   sendEmail(req.body)
//     .then((response) => res.send(response.message))
//     .catch((error) => res.status(500).send(error.message));
// });

// app.listen(port, () => {
//   console.log(`nodemailerProjectsss écoute à http://localhost:${port}`);
// });
