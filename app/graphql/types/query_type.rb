# module Types
#   class QueryType < Types::BaseObject
#     # Add root-level fields here.
#     # They will be entry points for queries on your schema.
#
#     # TODO: remove me
#     field :test_field, String, null: false,
#       description: "An example field added by the generator"
#     def test_field
#       "Hello World!"
#     end
#   end
# end

module Types
  class QueryType < Types::BaseObject
    field :test_field, String, null: false,
      description: "An example field added by the generator　XYZ"do
      argument :name, String, required: true
    end
    # フロント側で呼び出すfieldをメソッド形式を定義
    def test_field(name:)
      Rails.logger.info context[:time]
      "Hello #{name}!"
    end
  end
end
