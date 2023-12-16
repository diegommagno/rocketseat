// Arquivo de configuração do multer, para fazer o upload de arquivos para a aplicação.
// O Multer é a biblioteca que vai fazer o upload de arquivos para a aplicação.
// Passamos para o multer duas propriedades, onde vai salvar o arquivo (TMP_FOLDER) e depois vamos passar o nome do arquivo. 
// Utilizado a crypto para gerar um hash aleatório para combinar com o nome da imagem (arquivo) para garantir que o nome será único.

const path = require('path');
const multer = require('multer');
const crypto = require('crypto');

const TMP_FOLDER = path.resolve(__dirname, '..', '..', 'tmp');
const UPLOADS_FOLDER = path.resolve(__dirname, 'uploads');

const MULTER = {
    storage: multer.diskStorage({
        destination: TMP_FOLDER,
        filename: (request, file, callback) => {
            const fileHash = crypto.randomBytes(10).toString('hex'); // Usa o crypto para gerar um hash de forma aleatoria, para dar um nome para o arquivo nao sendo igual, caso seja iria substituir o arquivo. hex = hexadecimal.
            const filename = `${fileHash}-${file.originalname}`;

            return callback(null, filename);
        },
    }),
};

module.exports = {
    TMP_FOLDER,
    UPLOADS_FOLDER,
    MULTER,
};