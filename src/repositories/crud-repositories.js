class CrudRepostiory{
    constructor(model){
        this.model = model;
    }

    async create(data){
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.log("something went wrong in crud-repo")
            throw error;
        }
    }
    
    async destroy(modelId){
        try {
            const response = await this.model.destroy({
                where:{
                    id: modelId
                }
            });
            return response;
        } catch (error) {
            console.log("something went wrong in crud-repo")
            throw error;
        }
    }
    
    async get(modelId){
        try {
            const result = await this.model.findByPk(modelId);
            return result;
        } catch (error) {
            console.log("something went wrong in crud-repo")
            throw error;
        }
    }
    
    async update(modelId,data){
        try {
            const result = await this.model.findByPk(modelId);
            await result.update(data);
            return result;
        } catch (error) {
            console.log("something went wrong in crud-repo")
            throw error;
        }
    }
    
    async getAll(){
        try {
            const result = await this.model.findAll();
            return result;
        } catch (error) {
            console.log("something went wrong in crud-repo")
            throw error;
        }
    }
}

module.exports = CrudRepostiory;