export default function() {  
    this.get('/preprints', function(db, request) {
        return {
            data: db.preprints.map(attrs => (
                {type: 'preprints', id: attrs.id, attributes: attrs }
            ))
        };
    });
    this.get('/preprints/:id', function(db, request) {
        var id = request.params.id;
        return db.preprints.find(id);
    });
}