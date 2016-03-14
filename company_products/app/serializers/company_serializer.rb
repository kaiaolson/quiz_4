class CompanySerializer < ActiveModel::Serializer
  attributes :id, :name, :likes, :products

  def products
    object.products.map { |product| product.name }
  end
end
