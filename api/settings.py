from dotenv import load_dotenv
import os

load_dotenv(os.path.join(os.path.dirname(__file__), '.env'))

message_schema = {
    "_id": {
      "type": "string",
      "$id": "/properties/_id",
      "title": "The _id Schema.",
      "description": "An explanation about the purpose of this instance.",
      "default": "",
      "examples": [
        "59f9c535517bfae152e4a994"
      ]
    },
    "metadata": {
      "type": "object",
      "$id": "/properties/metadata",
      "properties": {
        "date": {
          "type": "string",
          "$id": "/properties/metadata/properties/date",
          "title": "The Date Schema.",
          "description": "An explanation about the purpose of this instance.",
          "default": "",
          "examples": [
            "1483225200146"
          ]
        },
        "url": {
          "type": "integer",
          "$id": "/properties/metadata/properties/url",
          "title": "The Url Schema.",
          "description": "An explanation about the purpose of this instance.",
          "default": 0,
          "examples": [
            8
          ]
        },
        "type": {
          "type": "string",
          "$id": "/properties/metadata/properties/type",
          "title": "The Type Schema.",
          "description": "An explanation about the purpose of this instance.",
          "default": "",
          "examples": [
            "post"
          ]
        },
        "message_words": {
          "type": "array",
          "$id": "/properties/metadata/properties/message_words",
          "items": {
            "type": "string",
            "$id": "/properties/metadata/properties/message_words/items",
            "title": "The 0 Schema.",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
              "happy"
            ]
          }
        }
      }
    },
    "message": {
      "type": "string",
      "$id": "/properties/message",
      "title": "The Message Schema.",
      "description": "An explanation about the purpose of this instance.",
      "default": "",
      "examples": [
        "@hetisrotjoch @hetisrotjoch @hetisrotjoch happy 2017!! 200k in 2017? hoop t voor je!"
      ]
    },
    "author": {
      "type": "string",
      "$id": "/properties/author",
      "title": "The Author Schema.",
      "description": "An explanation about the purpose of this instance.",
      "default": "",
      "examples": [
        "R4z3r #TeamRotkind"
      ]
    },
    "reports": {
      "type": "array",
      "$id": "/properties/reports",
      "items": {
        "type": "object",
        "$id": "/properties/reports/items",
        "properties": {
          "id": {
            "type": "string",
            "$id": "/properties/reports/items/properties/id",
            "title": "The Id Schema.",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
              "59f9c523517bfae152e4a969"
            ]
          },
          "score": {
            "type": "number",
            "$id": "/properties/reports/items/properties/score",
            "title": "The Score Schema.",
            "description": "An explanation about the purpose of this instance.",
            "default": 0.0,
            "examples": [
              0.1389138549566269
            ]
          },
          "scored_words": {
            "type": "array",
            "$id": "/properties/reports/items/properties/scored_words",
            "items": {
              "type": "string",
              "$id": "/properties/reports/items/properties/scored_words/items",
              "title": "The 0 Schema.",
              "description": "An explanation about the purpose of this instance.",
              "default": "",
              "examples": [
                "happy"
              ]
            }
          }
        }
      }
    }
  }

smug_message = {
    # 'title' tag used in item links. Defaults to the resource title minus
    # the final, plural 's' (works fine in most cases but not for 'people')
    'item_title': 'message',

    # most global settings can be overridden at resource level
    'resource_methods': ['GET'],

    'schema': message_schema
}

DOMAIN = {
    'smug_messages': smug_message
}

# Set the MongoDB URI
MONGO_URI = os.getenv('MONGO_URI', 'mongodb://localhost:27017/smug')

# Enable reads (GET), inserts (POST) and DELETE for resources/collections
# (if you omit this line, the API will default to ['GET'] and provide
# read-only access to the endpoint).
RESOURCE_METHODS = ['GET', 'POST', 'DELETE']

# Enable reads (GET), edits (PATCH), replacements (PUT) and deletes of
# individual items  (defaults to read-only item access).
ITEM_METHODS = ['GET', 'PATCH', 'PUT', 'DELETE']
