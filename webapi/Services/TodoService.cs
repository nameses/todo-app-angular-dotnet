using Microsoft.Extensions.Options;
using MongoDB.Driver;
using webapi.Models;

namespace webapi.Services
{
    public class TodoService
    {
        private readonly IMongoCollection<Todo> _todosCollection;

        public TodoService(
            IOptions<TodoAppDatabaseSettings> todoAppDatabaseSettings)
        {
            var mongoClient = new MongoClient(
                todoAppDatabaseSettings.Value.ConnectionString);

            var mongoDatabase = mongoClient.GetDatabase(
                todoAppDatabaseSettings.Value.DatabaseName);

            _todosCollection = mongoDatabase.GetCollection<Todo>(
                todoAppDatabaseSettings.Value.TodosCollectionName);
        }

        //get all
        public async Task<List<Todo>> GetAsync()
        {
            //var list = await _todosCollection.Find(_ => true).ToListAsync();
            var sorting = Builders<Todo>.Sort.Ascending(x => x.IfDone)
                         .Ascending(x => x.Description);

            var sortedList = await _todosCollection.Find(FilterDefinition<Todo>.Empty)
                                            .Sort(sorting)
                                            .ToListAsync();
            return sortedList;
        }
        //get
        public async Task<Todo> GetAsync(string id) =>
            await _todosCollection.Find(todo => todo.Id.Equals(id)).FirstOrDefaultAsync();

        //create
        public async Task CreateAsync(Todo todo) =>
            await _todosCollection.InsertOneAsync(todo);

        //update
        public async Task UpdateAsync(string id, Todo todo) =>
            await _todosCollection.ReplaceOneAsync(x => x.Id == id, todo);

        //remove
        public async Task RemoveAsync(string id) =>
            await _todosCollection.DeleteOneAsync(x => x.Id == id);
    }
}