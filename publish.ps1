Get-ChildItem ./packages -Directory | ForEach-Object {
    cd "$($_.FullName)"
    npm publish
    cd ..
}