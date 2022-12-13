function getFilesToBackup(lastBackup, changes) {
    const lastChangesArr = changes
        .filter( ([,time]) => time > lastBackup )
        .map( ([id,]) => id );
    return [...new Set(lastChangesArr)].sort( (a,b) => a - b);
}