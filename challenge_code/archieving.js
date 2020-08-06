const fs = require('fs');
const archiver = require('archiver');
const { type } = require('os');

async function archieveService(config, extensitonFile) {
        const {
            mode, optionsCompress, fileArchievedName
        } = config;
        const output = fs.createWriteStream('./archieve/' + fileArchievedName);
        const archive = archiver(mode, optionsCompress);

        output.on('close', function() {
            console.log(archive.pointer() + ' total bytes');
            console.log('ARCHIEVE SUCCESSFULL PLEASE LOOK FOR FILE UNDER FOLDER ARCHIEVE');
        });

        archive.glob(`files/directoryA/*.${extensitonFile}`);
        archive.glob(`files/directoryB/*.${extensitonFile}`);
        archive.glob(`files/directoryC/*.${extensitonFile}`);

        archive.pipe(output);
        archive.finalize();
}

async function archieving(archieveMode, targetExtention) {
    let config;

    switch (archieveMode) {
        case 'zip' :
            config = {
                mode: 'zip',
                optionsCompress: { zlibs: { level: 9 }},
                fileArchievedName: 'archieve.zip'
            };
            break;

        case 'tar' :
            config = {
                mode: 'tar',
                optionsCompress: { gzipOptions: { level: 9 }},
                fileArchievedName: 'archieve.tgz'
            };
            break;

        default:
            config = {
                mode: 'unsupported feature archieving'
            };
            break;
    }

    if(typeof targetExtention !== 'string'|| targetExtention === '') {
        console.log('Please check your typing in File Extension');
    } else {
        if (config.mode !== 'unsupported feature archieving') {
            await archieveService(config, targetExtention.split('.').pop().toLowerCase());
        } else {
            console.log('Currently Only zip and tar mode archieve');
        }
    } 
};

archieving('zip','JS');