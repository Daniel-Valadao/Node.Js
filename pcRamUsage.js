const os = require('os');
const { memoryUsage, availableMemory } = require('process');
const { parseArgs } = require('util');
setInterval(() => {
    
    const {arch,platform,freemem,totalmem, } = os;
    const tRam= totalmem()/1024/1024;
    const fRam=freemem()/1024/1024;
    const usage = (fRam/tRam)*100;

    
    
    const stats ={
        OS: platform(),
        Arch: arch(),
        TotalRam:`${parseInt(tRam)}MB`,
        FreeRam: `${parseInt(fRam)}MB`,
        usage : `${usage.toFixed(2)}%` ,
        
    }
    
    console.clear()
    console.table(stats)
exports.stats = stats;
}, 1000);