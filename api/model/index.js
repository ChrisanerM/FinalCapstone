const db = require("../config/index.js");

let { hash, compare, hashSync } = require("bcrypt");
//

// Get all products
 const getProducts = (result) => {
    db.query(`SELECT * FROM Products`, (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

 const getProductById = (id, result) => {
    db.query(`SELECT * FROM Products WHERE ID = ?`, [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
  
// Insert Product to Database
const insertProduct = (data, result) => {
    db.query("INSERT INTO Products SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Update Product to Database
 const updateProductById = (data, id, result) => {
    db.query(`UPDATE Products SET ? WHERE ID = ?`, [data, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Delete Product to Database
 const deleteProductById = (id, result) => {
    db.query(`DELETE FROM Products WHERE ID = ?`, [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//get all users
const getUsers = (result) => {
    db.query(`SELECT * FROM Users;`, (err,results) => {
        if(err) result(err,null);
        else result(null,results);
    })
}

const getUserById = (id, result) => {
    db.query(`SELECT * FROM Users WHERE userID = ?`, [id], (err,results) => {
        if(err) result(err,null);
        else result(null,results);
    })
}

const deleteUserById = (id,result) => {
    db.query(`DELETE FROM Users WHERE userID = ?`, [id], (err,results) => {
        if(err) result(err,null);
        else result(null,results)
    })
}

const registerUser = async (data, result) => {
    data.userPass = await hash(data.userPass, 15);
    db.query(`INSERT INTO Users SET ?` ,[data], (err,results) => {
        if(err) result(err,null);
        else result(null,results);
    })
}

const updateUser = (data, id, result) => {
    if(data.userPass !== null || data.userPass !== undefined) data.userPass = hashSync(data.userPass, 15);
    db.query(`UPDATE Users SET ? WHERE userID = ?;`, [data, id], (err, results) => {
        if(err) result(err, null);
        else result(null, results);
    })
}

const login = (data, result) => {
    const {emailAdd, userPass} = data;
    db.query(`SELECT * FROM Users WHERE emailAdd = ?`, [emailAdd], async (err,results) => {
        const value = results;
        if(err) result(err,null);
        else{
            await compare(userPass, results[0].userPass, (err,results) => {
                if(err) result({err,message:"Incorrect Information"});
                else result(null,(results, value))
            })
        }
    })
}

module.exports = {getProducts, getProductById, insertProduct, updateProductById, deleteProductById, getUsers, getUserById, deleteUserById, registerUser, updateUser, login};



// //import database connection from config folder
// let db = require("../config");
// //import bcrypt module
// let { hash, compare, hashSync } = require("bcrypt");
// //
// let { createToken } = require("../middleware/AuthenticatedUser");
// //LOGIN
// class User {
//   login(req, res) {
//     const { emailAdd, userPass } = req.body;
//     const strQry = `
//         SELECT 
//     userID,firstName,lastName,gender,emailAdd,userRole,UserProfile
//     FROM Users
//     WHERE emailAdd =$ {emailAdd};
// `;
//     db.query(strQry, async (err, data) => {
//       if (err) throw err;
//       if (!data || data == null) {
//         res.status(401).json({ err: "You provided the wrong email address" });
//       } else {
//         //await needs to be inside an async function
//         await compare(userPass, data[0].userPass, (cErr, cResult) => {
//           if (cErr) throw cErr;
//           //Create token
//           const jwToken = createToken({
//             emailAdd,
//             userPass,
//           });
//           //Saving our token
//           res.cookie("LegitUser", jwToken, {
//             maxAge: 3600000,
//             httpOnly: true,
//           });
//           if (cResult) {
//             res.status(200).json({
//               msg: "Logged in",
//               jwToken,
//               result: data[0],
//             });
//           } else {
//             res.status(401).json({
//               err: "You entered an invalid password or did not register",
//             });
//           }
//         });
//       }
//     });
//   }
//   fetchUsers(req, res) {
//     const strQry = `
// SELECT 
//     userID,firstName,lastName,gender,emailAdd,userRole,UserProfile
//     FROM Users
// `;
//     db.query(strQry, (err, data) => {
//       if (err) throw err;
//       else res.status(200).json({ results: data });
//     });
//   }
//   fetchUsers(req, res) {
//     const strQry = `
// SELECT 
//     userID,firstName,lastName,gender,emailAdd,userRole,UserProfile
//     FROM Users
//     WHERE UserID =?;
// `;
//     db.query(strQry, [req.params.id], (err, data) => {
//       if (err) throw err;
//       else res.status(200).json({ results: data });
//     });
//   }
//   async createUser(req, res) {
//     // Payload
//     let detail = req.body;
//     // Hashing user password
//     detail.userPass = await hash(detail.userPass, 15);
//     // This information will be used for authentication.
//     let user = {
//       emailAdd: detail.emailAdd,
//       userPass: detail.userPass,
//     };
//     // sql query
//     const strQry = `INSERT INTO Users
//       SET ?;`;
//     db.query(strQry, [detail], (err) => {
//       if (err) {
//         res.status(401).json({ err });
//       } else {
//         // Create a token
//         const jwToken = createToken(user);
//         // This token will be saved in the cookie.
//         // The duration is in milliseconds.
//         res.cookie("LegitUser", jwToken, {
//           maxAge: 3600000,
//           httpOnly: true,
//         });
//         res.status(200).json({ msg: "A user record was saved." });
//       }
//     });
//   }
//   updateUser(req, res) {
//     let data = req.body;
//     if (data.userPass !== null || data.userPass !== undefined)
//       data.userPass = hashSync(data.userPass, 15);
//     const strQry = `
//       UPDATE Users
//       SET ?
//       WHERE userID = ?;
//       `;
//     //db
//     db.query(strQry, [data, req.params.id], (err) => {
//       if (err) throw err;
//       res.status(200).json({ msg: "A row was affected" });
//     });
//   }
//   deleteUser(req, res) {
//     const strQry = `
//       DELETE FROM Users
//       WHERE userID = ?;
//       `;
//     //db
//     db.query(strQry, [req.params.id], (err) => {
//       if (err) throw err;
//       res.status(200).json({ msg: "A record was removed from a database" });
//     });
//   }
// }

// //Product
// class Product {
//   fetchProducts(req, res) {
//     const strQry = `SELECT id, prodName, prodDescription, category, price, prodQuantity, imgURL
//         FROM products;`;
//     db.query(strQry, (err, results) => {
//       if (err) throw err;
//       res.status(200).json({ results: results });
//     });
//   }
//   fetchProduct(req, res) {
//     const strQry = `SELECT id, prodName, prodDescription, category, price, prodQuantity, imgURL
//         FROM products
//         WHERE id = ?;`;
//     db.query(strQry, [req.params.id], (err, results) => {
//       if (err) throw err;
//       res.status(200).json({ results: results });
//     });
//   }
//   addProduct(req, res) {
//     const strQry = `
//         INSERT INTO Products
//         SET ?;
//         `;
//     db.query(strQry, [req.body], (err) => {
//       if (err) {
//         res.status(400).json({ err: "Unable to insert a new record." });
//       } else {
//         res.status(200).json({ msg: "Product saved" });
//       }
//     });
//   }
//   updateProduct(req, res) {
//     const strQry = `
//         UPDATE Products
//         SET ?
//         WHERE id = ?
//         `;
//     db.query(strQry, [req.body, req.params.id], (err) => {
//       if (err) {
//         res.status(400).json({ err: "Unable to update a record." });
//       } else {
//         res.status(200).json({ msg: "Product updated" });
//       }
//     });
//   }
//   deleteProduct(req, res) {
//     const strQry = `
//         DELETE FROM Products
//         WHERE id = ?;
//         `;
//     db.query(strQry, [req.params.id], (err) => {
//       if (err) res.status(400).json({ err: "The record was not found." });
//       res.status(200).json({ msg: "A product was deleted." });
//     });
//   }
// }
// // Export User class
// module.exports = {
//   User,
//   Product,
// };

//EACH TABLE NEEDS A CLASS WITH THE FUNCTIONS INSIDE

