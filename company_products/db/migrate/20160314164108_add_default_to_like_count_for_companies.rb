class AddDefaultToLikeCountForCompanies < ActiveRecord::Migration
  def change
    change_column :companies, :likes, :integer, default: 0
  end
end
