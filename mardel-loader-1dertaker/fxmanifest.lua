fx_version 'cerulean'
description "1dertaker dev, loader"
games { 'gta5' }
lua54 "yes"

author ''
description ''
version '1.1.0'

loadscreen 'index.html'
loadscreen_manual_shutdown 'yes'
client_script 'client.lua'
server_script 'server.lua'
loadscreen_cursor 'yes'

files {
    'index.html',
    'css/style.css',
    'script/main.js',
    'logo/logo.png',
    'song/*',
    'img/*'

}
