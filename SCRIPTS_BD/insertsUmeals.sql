INSERT INTO `umeals`.`emprendimiento` (`Nombre`, `Descripcion`, `portada_img_URL`, `Estado`, `logotipo_img_url`, `Calificacion`) VALUES ('Artesano Bebidas', 'Tambien tenemos bebidas refrescantes', 'https://drive.usercontent.google.com/download?id=13nJRG-cVWNh8JeVBzIdZ0D879KhiihSE&export=view&authuser=0', '1', 'https://drive.usercontent.google.com/download?id=1-0j04ktVzPORth_TtB6j0BbXBH95ISqF', '4.5');

INSERT INTO `umeals`.`EMPRENDIMIENTO` 
(`Nombre`, `Descripcion`, `portada_img_URL`, `Estado`, `logotipo_img_url`, `Calificacion`) 
VALUES 
('Artesano Sandwich', 'LLEGARON LOS SANDWICHES ARTESANALES', 'https://drive.usercontent.google.com/download?id=1OfGPNVK1grJy38kA_j_m2hAboSRtwieC', '0', 'https://drive.usercontent.google.com/download?id=1wRHf74kiPiRlAUFCzLVz_tQnbi6QSWcd', 4.0);

INSERT INTO `umeals`.`EMPRENDIMIENTO` 
(`Nombre`, `Descripcion`, `portada_img_URL`, `Estado`, `logotipo_img_url`, `Calificacion`) 
VALUES 
('Dalena', 'Los mejores brownies y crookies', 'https://drive.usercontent.google.com/download?id=1OfGPNVK1grJy38kA_j_m2hAboSRtwieC', '0', 'https://drive.usercontent.google.com/download?id=1-0j04ktVzPORth_TtB6j0BbXBH95ISqF', 4.8);

INSERT INTO `umeals`.`EMPRENDIMIENTO` 
(`Nombre`, `Descripcion`, `portada_img_URL`, `Estado`, `logotipo_img_url`, `Calificacion`) 
VALUES 
('Amarillos Cakes', 'Llena tu vida de color amarillo', 'https://drive.usercontent.google.com/download?id=1OfGPNVK1grJy38kA_j_m2hAboSRtwieC', '0', 'https://drive.usercontent.google.com/download?id=1wRHf74kiPiRlAUFCzLVz_tQnbi6QSWcd', 4.3);






INSERT INTO `umeals`.`RESENAS_RATED` 
(`Calificacion`, `Resena`, `EMPRENDIMIENTO_idEMPRENDIMIENTOS`) 
VALUES ('4.5', 'Muy buena', '1');

INSERT INTO `umeals`.`PRODUCTOS` 
(`Nombre`, `Precio`, `imgURL`, `cantidad`, `EMPRENDIMIENTO_idEMPRENDIMIENTOS`) 
VALUES 
('Jugo Hit 200ml', 1600, 'https://drive.usercontent.google.com/download?id=1ijLgqXxVf8jnY4olPqRkvuZbXmkUyM23', '2', '1');

INSERT INTO `umeals`.`PRODUCTOS` 
(`Nombre`, `Precio`, `imgURL`, `cantidad`, `EMPRENDIMIENTO_idEMPRENDIMIENTOS`) 
VALUES 
('Te Hatsu 200ml', 2600, 'https://drive.usercontent.google.com/download?id=1U7_4Rl_Uxg5VdGPsQqB5Jx2tB6t2ZErk', '2', '1');

INSERT INTO `umeals`.`PRODUCTOS` 
(`Nombre`, `Precio`, `imgURL`, `cantidad`, `EMPRENDIMIENTO_idEMPRENDIMIENTOS`) 
VALUES 
('Coca Cola 250ml', 2500, 'https://drive.usercontent.google.com/download?id=1swwuStsNMAoG4Ja6N1c3bjJr6kbyKWTa', '2', '1');

INSERT INTO umeals.productos (Nombre, Precio, imgURL, cantidad, EMPRENDIMIENTO_idEMPRENDIMIENTOS) VALUES ('Kola Hipinto 400ml', '2800', 'https://drive.usercontent.google.com/download?id=1ODPyS_LV4IRqVSPMgD8Jgc1uGMCXhHM_', '2', '1');
INSERT INTO umeals.productos (Nombre, Precio, imgURL, cantidad, EMPRENDIMIENTO_idEMPRENDIMIENTOS) VALUES ('Jugo Hit 500ml', '3000', 'https://drive.usercontent.google.com/download?id=1TtY40jJOH6eys2F_9ir2m3QVRic2eZxd', '2', '1');

INSERT INTO umeals.productos (Nombre, Precio, imgURL, cantidad, EMPRENDIMIENTO_idEMPRENDIMIENTOS) VALUES ('Premium: Salami y pollo con salsa bumanguesa', '6500', 'https://drive.usercontent.google.com/download?id=1rqQjbRwZFlQJhYrrlCbnj6CM4-lXF6TW', '3', '2');
INSERT INTO umeals.productos (Nombre, Precio, imgURL, cantidad, EMPRENDIMIENTO_idEMPRENDIMIENTOS) VALUES ('Pollo con salsa bumanguesa', '5500', 'https://drive.usercontent.google.com/download?id=1rqQjbRwZFlQJhYrrlCbnj6CM4-lXF6TW', '3', '2');
INSERT INTO umeals.productos (Nombre, Precio, imgURL, cantidad, EMPRENDIMIENTO_idEMPRENDIMIENTOS) VALUES ('Pollo con salsa chipotle', '5500', 'https://drive.usercontent.google.com/download?id=1Jf44PoA4W7FY5SZE1bBKDLQqVSNIi0AJ', '3', '2');
INSERT INTO umeals.productos (Nombre, Precio, imgURL, cantidad, EMPRENDIMIENTO_idEMPRENDIMIENTOS) VALUES ('Salami con salsa bumanguesa', '5500', 'https://drive.usercontent.google.com/download?id=1Jf44PoA4W7FY5SZE1bBKDLQqVSNIi0AJ', '3', '2');

INSERT INTO umeals.productos (idPRODUCTOS, Nombre, Precio, imgURL, cantidad, EMPRENDIMIENTO_idEMPRENDIMIENTOS) VALUES ('10', 'Brownie Oreo', '3500', 'https://drive.usercontent.google.com/download?id=17iENuS9Nv0hxOLzCJjKVwfP9FyCc0zIY', '3', '3');
INSERT INTO umeals.productos (idPRODUCTOS, Nombre, Precio, imgURL, cantidad, EMPRENDIMIENTO_idEMPRENDIMIENTOS) VALUES ('11', 'Brownie Nutella', '3500', 'https://drive.usercontent.google.com/download?id=1jAP9i_zgCYrqQi6xegIdvkEFwPg4mMDi', '3', '3');
INSERT INTO umeals.productos (Nombre, Precio, imgURL, cantidad, EMPRENDIMIENTO_idEMPRENDIMIENTOS) VALUES ('Crookie', '5000', 'https://drive.usercontent.google.com/download?id=1alkgqMZOWK3QftDYoKGk5KAmSYMM9-x9', '2', '3');
INSERT INTO umeals.productos (Nombre, Precio, imgURL, cantidad, EMPRENDIMIENTO_idEMPRENDIMIENTOS) VALUES ('Crownie', '5000', 'https://drive.usercontent.google.com/download?id=12lhwUBu32D4jJITSB9ZBQJluDbFudnG5', '2', '3');

INSERT INTO umeals.productos (Nombre, Precio, imgURL, cantidad, EMPRENDIMIENTO_idEMPRENDIMIENTOS) VALUES ('Red Velvet Rellena de Nutella', '7000', 'https://drive.usercontent.google.com/download?id=1kDvU6BiFm-ZJpItmyvNfgD5JlZMuZRwY', '2', '4');
INSERT INTO umeals.productos (Nombre, Precio, imgURL, cantidad, EMPRENDIMIENTO_idEMPRENDIMIENTOS) VALUES ('Chips de chocolate', '7000', 'https://drive.usercontent.google.com/download?id=15Qx3pWPCs3RRBSq7MQwwZFo34GQ5etcQ', '2', '4');
INSERT INTO umeals.productos (Nombre, Precio, imgURL, cantidad, EMPRENDIMIENTO_idEMPRENDIMIENTOS) VALUES ('Red velvet rellena frosting queso crema', '7000', 'https://drive.usercontent.google.com/download?id=1buOkC0BJvI4CdqHJhjEsYCUYuKSE9LY2', '2', '4');
UPDATE umeals.emprendimiento SET portada_img_URL = 'https://drive.usercontent.google.com/download?id=15rQExLC1OsWAE3QAP3CP5xVG7kLgnIPG&export=view&authuser=0' WHERE (idEMPRENDIMIENTOS = '3');

INSERT INTO umeals.carrusel_images (idCARRUSEL_IMAGES, ImgPath) VALUES ('1', 'https://drive.usercontent.google.com/download?id=1aAfY7-U9b7_oqsU62qy54MxcaetMDWv7&export=view&authuser=0');
UPDATE `umeals`.`emprendimiento` SET `logotipo_img_url` = 'https://drive.usercontent.google.com/download?id=1ju9l1GNMEmTRAprNdrsJuuqGQVvpDk2X' WHERE (`idEMPRENDIMIENTOS` = '1');
UPDATE `umeals`.`emprendimiento` SET `logotipo_img_url` = 'https://drive.usercontent.google.com/download?id=1ju9l1GNMEmTRAprNdrsJuuqGQVvpDk2X' WHERE (`idEMPRENDIMIENTOS` = '2');
UPDATE `umeals`.`emprendimiento` SET `logotipo_img_url` = 'https://drive.usercontent.google.com/download?id=1dLvcRMvCKcCxIRjQ3pRCb0hHLJkR_ZuC' WHERE (`idEMPRENDIMIENTOS` = '1');
UPDATE `umeals`.`emprendimiento` SET `logotipo_img_url` = 'https://drive.usercontent.google.com/download?id=1dLvcRMvCKcCxIRjQ3pRCb0hHLJkR_ZuC' WHERE (`idEMPRENDIMIENTOS` = '2');
INSERT INTO `umeals`.`carrusel_images` (`idCARRUSEL_IMAGES`, `ImgPath`) VALUES ('2', 'https://drive.usercontent.google.com/download?id=1F9iWckynDi312uDylJoOkaUOKmEbGgvM');
INSERT INTO `umeals`.`carrusel_images` (`idCARRUSEL_IMAGES`, `ImgPath`) VALUES ('3', 'https://drive.usercontent.google.com/download?id=1monTAeTJ7_VS-iOKFhTbnPrFIdHg_Xa0');
INSERT INTO `umeals`.`carrusel_images` (`idCARRUSEL_IMAGES`, `ImgPath`) VALUES ('4', 'https://drive.usercontent.google.com/download?id=1ZdZjtXkvM0oVZGgIkd9n_53a3l0JgrbR');
UPDATE `umeals`.`emprendimiento` SET `portada_img_URL` = 'https://drive.usercontent.google.com/download?id=1cjt7R-NCe4MVNU0CtbGo1Kr9A8oFuCGs' WHERE (`idEMPRENDIMIENTOS` = '4');

INSERT INTO `umeals`.`usuario` (`idUSUARIOS`, `Nombre`, `correo`, `password`, `Apellidos`, `telefono`) VALUES ('1', 'Andres', 'andres@gmail.com', '123', 'Arango', '3002336900');
UPDATE `umeals`.`emprendimiento` SET `contacto` = '3002336900' WHERE (`idEMPRENDIMIENTOS` = '1');
UPDATE `umeals`.`emprendimiento` SET `contacto` = '3012009642' WHERE (`idEMPRENDIMIENTOS` = '2');
UPDATE `umeals`.`emprendimiento` SET `contacto` = '3222784313' WHERE (`idEMPRENDIMIENTOS` = '3');
UPDATE `umeals`.`emprendimiento` SET `contacto` = '3165302109' WHERE (`idEMPRENDIMIENTOS` = '4');

UPDATE `umeals`.`emprendimiento` SET `horarios` = 
    '{
      "lunes": "7:00 - 9:00",
      "martes": "9:00 - 11:00",
      "miercoles": "6:00 - 8:00",
      "jueves": "16:00 - 18:00",
      "viernes": "10:00 - 12:00"
    }'
    WHERE (`idEMPRENDIMIENTOS` = '1');
    UPDATE `umeals`.`emprendimiento` SET `horarios` = '{\"lunes\": \"7:00 AM - 9:00 AM\", \"jueves\": \"4:00 PM - 6:00 PM\", \"martes\": \"9:00 AM - 11:00 AM\", \"viernes\": \"10:00 AM - 2:00 PM\", \"miercoles\": \"8:00 AM - 10:00 AM\"}' WHERE (`idEMPRENDIMIENTOS` = '2');
UPDATE `umeals`.`emprendimiento` SET `horarios` = '{\"lunes\": \"7:00 AM - 9:00 AM\", \"jueves\": \"4:00 PM - 6:00 PM\", \"martes\": \"6:00 AM - 11:00 AM\", \"viernes\": \"10:00 AM - 5:00 PM\", \"miercoles\": \"10:00 AM - 3:00 PM\"}' WHERE (`idEMPRENDIMIENTOS` = '3');
UPDATE `umeals`.`emprendimiento` SET `horarios` = '{\"lunes\": \"7:00 AM - 12:00 PM\", \"jueves\": \"6:00 AM - 6:00 PM\", \"martes\": \"9:00 AM - 11:00 AM\", \"viernes\": \"10:00 AM - 12:00 PM\", \"miercoles\": \"6:00 AM - 8:00 AM\"}' WHERE (`idEMPRENDIMIENTOS` = '4');

UPDATE `umeals`.`emprendimiento` SET `ubicacion` = 'https://maps.app.goo.gl/HW8wFGF9Mfa14RFE7' WHERE (`idEMPRENDIMIENTOS` = '1');
UPDATE `umeals`.`emprendimiento` SET `ubicacion` = 'https://maps.app.goo.gl/HW8wFGF9Mfa14RFE7' WHERE (`idEMPRENDIMIENTOS` = '2');
UPDATE `umeals`.`emprendimiento` SET `ubicacion` = 'https://maps.app.goo.gl/HW8wFGF9Mfa14RFE7' WHERE (`idEMPRENDIMIENTOS` = '3');
UPDATE `umeals`.`emprendimiento` SET `ubicacion` = 'https://maps.app.goo.gl/HW8wFGF9Mfa14RFE7' WHERE (`idEMPRENDIMIENTOS` = '4');