using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Text.Json.Serialization;

namespace webapi.Models
{
    public class Todo
    {
        [BsonId]
        [BsonElement("id")]
        [JsonPropertyName("id")]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("description")]
        [JsonPropertyName("description")]
        [BsonRequired]
        public required string Description { get; set; }

        [BsonElement("ifDone")]
        [JsonPropertyName("ifDone")]
        [BsonDefaultValue(false)]
        public bool IfDone { get; set; }
    }
}