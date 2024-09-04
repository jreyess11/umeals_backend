
INSERT INTO `umeals`.`reseNas_rated` (`Calificacion`, `ReseNa`) VALUES ('4.5', 'Muy buena');

INSERT INTO `umeals`.`emprendimiento` (`Nombre`, `Descripcion`, `portada_img_URL`, `RESENAS_RATED_idRESENAS_RATED`, `Estado`, `logotipo_img_url`) VALUES ('Artesano Bebidas', 'Tambien tenemos bebidas refrescantes', 'https://drive.usercontent.google.com/download?id=13nJRG-cVWNh8JeVBzIdZ0D879KhiihSE&export=view&authuser=0', '1', '1', 'https://drive.usercontent.google.com/download?id=1-0j04ktVzPORth_TtB6j0BbXBH95ISqF');
INSERT INTO `umeals`.`emprendimiento` (`Nombre`, `Descripcion`, `portada_img_URL`, `RESENAS_RATED_idRESENAS_RATED`, `Estado`, `logotipo_img_url`) VALUES ('Artesano Sandwich', 'LLEGARON LOS SANDWICHES ARTESANALES', 'https://drive.usercontent.google.com/download?id=1OfGPNVK1grJy38kA_j_m2hAboSRtwieC', '1', '0', 'https://drive.usercontent.google.com/download?id=1wRHf74kiPiRlAUFCzLVz_tQnbi6QSWcd');
INSERT INTO `umeals`.`emprendimiento` (`Nombre`, `Descripcion`, `portada_img_URL`, `RESENAS_RATED_idRESENAS_RATED`, `Estado`, `logotipo_img_url`) VALUES ('Dalena', 'Los mejores brownies y crookies', 'https://drive.usercontent.google.com/download?id=1OfGPNVK1grJy38kA_j_m2hAboSRtwieC', '1', '0', 'https://drive.usercontent.google.com/download?id=1-0j04ktVzPORth_TtB6j0BbXBH95ISqF');
INSERT INTO `umeals`.`emprendimiento` (`Nombre`, `Descripcion`, `portada_img_URL`, `RESENAS_RATED_idRESENAS_RATED`, `Estado`, `logotipo_img_url`) VALUES ('Amarillos Cakes', 'Llena tu vida de color amarillo', 'https://drive.usercontent.google.com/download?id=1OfGPNVK1grJy38kA_j_m2hAboSRtwieC', '1', '0', 'https://drive.usercontent.google.com/download?id=1wRHf74kiPiRlAUFCzLVz_tQnbi6QSWcd');


INSERT INTO `umeals`.`productos` (`Nombre`, `Precio`, `imgURL`, `cantidad`, `EMPRENDIMIENTO_idEMPRENDIMIENTOS`) VALUES ('Jugo Hit 200ml', '1.600', 'https://drive.usercontent.google.com/download?id=1ijLgqXxVf8jnY4olPqRkvuZbXmkUyM23', '2', '1');
INSERT INTO `umeals`.`productos` (`Nombre`, `Precio`, `imgURL`, `cantidad`, `EMPRENDIMIENTO_idEMPRENDIMIENTOS`) VALUES ('Te Hatsu 200ml', '2.600', 'https://drive.usercontent.google.com/download?id=1U7_4Rl_Uxg5VdGPsQqB5Jx2tB6t2ZErk', '2', '1');
INSERT INTO `umeals`.`productos` (`Nombre`, `Precio`, `imgURL`, `cantidad`, `EMPRENDIMIENTO_idEMPRENDIMIENTOS`) VALUES ('Coca Cola 250ml', '2.500', 'https://drive.usercontent.google.com/download?id=1swwuStsNMAoG4Ja6N1c3bjJr6kbyKWTa', '2', '1');
INSERT INTO `umeals`.`productos` (`Nombre`, `Precio`, `imgURL`, `cantidad`, `EMPRENDIMIENTO_idEMPRENDIMIENTOS`) VALUES ('Kola Hipinto 400ml', '2.800', 'https://drive.usercontent.google.com/download?id=1ODPyS_LV4IRqVSPMgD8Jgc1uGMCXhHM_', '2', '1');
INSERT INTO `umeals`.`productos` (`Nombre`, `Precio`, `imgURL`, `cantidad`, `EMPRENDIMIENTO_idEMPRENDIMIENTOS`) VALUES ('Jugo Hit 500ml', '3.000', 'https://drive.usercontent.google.com/download?id=1TtY40jJOH6eys2F_9ir2m3QVRic2eZxd', '2', '1');
UPDATE `umeals`.`productos` SET `Precio` = '2500' WHERE (`idPRODUCTOS` = '1');
UPDATE `umeals`.`productos` SET `Precio` = '2600' WHERE (`idPRODUCTOS` = '2');
UPDATE `umeals`.`productos` SET `Precio` = '2500' WHERE (`idPRODUCTOS` = '3');
UPDATE `umeals`.`productos` SET `Precio` = '2800' WHERE (`idPRODUCTOS` = '4');
UPDATE `umeals`.`productos` SET `Precio` = '3000' WHERE (`idPRODUCTOS` = '5');

INSERT INTO `umeals`.`productos` (`Nombre`, `Precio`, `imgURL`, `cantidad`, `EMPRENDIMIENTO_idEMPRENDIMIENTOS`) VALUES ('Premium: Salami y pollo con salsa bumanguesa', '6500', 'https://drive.usercontent.google.com/download?id=1rqQjbRwZFlQJhYrrlCbnj6CM4-lXF6TW', '3', '2');
INSERT INTO `umeals`.`productos` (`Nombre`, `Precio`, `imgURL`, `cantidad`, `EMPRENDIMIENTO_idEMPRENDIMIENTOS`) VALUES ('Pollo con salsa bumanguesa', '5500', 'https://drive.usercontent.google.com/download?id=1rqQjbRwZFlQJhYrrlCbnj6CM4-lXF6TW', '3', '2');
INSERT INTO `umeals`.`productos` (`Nombre`, `Precio`, `imgURL`, `cantidad`, `EMPRENDIMIENTO_idEMPRENDIMIENTOS`) VALUES ('Pollo con salsa chipotle', '5500', 'https://drive.usercontent.google.com/download?id=1Jf44PoA4W7FY5SZE1bBKDLQqVSNIi0AJ', '3', '2');
INSERT INTO `umeals`.`productos` (`Nombre`, `Precio`, `imgURL`, `cantidad`, `EMPRENDIMIENTO_idEMPRENDIMIENTOS`) VALUES ('Salami con salsa bumanguesa', '5500', 'https://drive.usercontent.google.com/download?id=1Jf44PoA4W7FY5SZE1bBKDLQqVSNIi0AJ', '3', '2');

INSERT INTO `umeals`.`productos` (`idPRODUCTOS`, `Nombre`, `Precio`, `imgURL`, `cantidad`, `EMPRENDIMIENTO_idEMPRENDIMIENTOS`) VALUES ('10', 'Brownie Oreo', '3500', 'https://drive.usercontent.google.com/download?id=17iENuS9Nv0hxOLzCJjKVwfP9FyCc0zIY', '3', '3');
INSERT INTO `umeals`.`productos` (`idPRODUCTOS`, `Nombre`, `Precio`, `imgURL`, `cantidad`, `EMPRENDIMIENTO_idEMPRENDIMIENTOS`) VALUES ('11', 'Brownie Nutella', '3500', 'https://drive.usercontent.google.com/download?id=1jAP9i_zgCYrqQi6xegIdvkEFwPg4mMDi', '3', '3');
INSERT INTO `umeals`.`productos` (`Nombre`, `Precio`, `imgURL`, `cantidad`, `EMPRENDIMIENTO_idEMPRENDIMIENTOS`) VALUES ('Crookie', '5000', 'https://drive.usercontent.google.com/download?id=1alkgqMZOWK3QftDYoKGk5KAmSYMM9-x9', '2', '3');
INSERT INTO `umeals`.`productos` (`Nombre`, `Precio`, `imgURL`, `cantidad`, `EMPRENDIMIENTO_idEMPRENDIMIENTOS`) VALUES ('Crownie', '5000', 'https://drive.usercontent.google.com/download?id=12lhwUBu32D4jJITSB9ZBQJluDbFudnG5', '2', '3');

INSERT INTO `umeals`.`productos` (`Nombre`, `Precio`, `imgURL`, `cantidad`, `EMPRENDIMIENTO_idEMPRENDIMIENTOS`) VALUES ('Red Velvet Rellena de Nutella', '7000', 'https://drive.usercontent.google.com/download?id=1kDvU6BiFm-ZJpItmyvNfgD5JlZMuZRwY', '2', '4');
INSERT INTO `umeals`.`productos` (`Nombre`, `Precio`, `imgURL`, `cantidad`, `EMPRENDIMIENTO_idEMPRENDIMIENTOS`) VALUES ('Chips de chocolate', '7000', 'https://drive.usercontent.google.com/download?id=15Qx3pWPCs3RRBSq7MQwwZFo34GQ5etcQ', '2', '4');
INSERT INTO `umeals`.`productos` (`Nombre`, `Precio`, `imgURL`, `cantidad`, `EMPRENDIMIENTO_idEMPRENDIMIENTOS`) VALUES ('Red velvet rellena frosting queso crema', '7000', 'https://drive.usercontent.google.com/download?id=1buOkC0BJvI4CdqHJhjEsYCUYuKSE9LY2', '2', '4');
UPDATE `umeals`.`emprendimiento` SET `portada_img_URL` = 'https://drive.usercontent.google.com/download?id=15rQExLC1OsWAE3QAP3CP5xVG7kLgnIPG&export=view&authuser=0' WHERE (`idEMPRENDIMIENTOS` = '3');

