// Utilizada para salvar o arquivo em um local, a imagem do usuário é única, portanto quando envia outra, a antiga é excluída.

const fs = require('fs'); // Lidar com manipulação de arquivos.
const path = require('path'); // Utilizado para manipular caminhos de arquivos, navegar pelos diretórios.
const uploadConfig = require('../configs/upload'); // Importa as configurações de upload.

class DiskStorage { 
    // Função para salvar arquivos
    async saveFile(file) {
        await fs.promises.rename(
            path.resolve(uploadConfig.TMP_FOLDER, file), // Caminho do arquivo temporário. Aqui é para mudar o arquivo de lugar.
            path.resolve(uploadConfig.UPLOADS_FOLDER, file) // Caminho do arquivo final.
            // Quando a imagem é enviada para a aplicação, ela fica na pasta de temporário até o back-end decidir o que vai fazer com ela, então ele move ela para a pasta de uploads.
        );

        return file;
    }

    // Função para deletar arquivos
    async deleteFile(file) {
        const filePath = path.resolve(uploadConfig.UPLOADS_FOLDER, file); // Caminho do arquivo fina, vai na pasta e passa a file.

        try {
            await fs.promises.stat(filePath); // Verifica se o arquivo existe.
        } catch {
            return; // Se não existir, retorna.
        }

        await fs.promises.unlink(filePath); // Se existir, deleta.
    }
}

module.exports = DiskStorage; // Exporta a classe.