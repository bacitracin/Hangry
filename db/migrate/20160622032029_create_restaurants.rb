class CreateRestaurants < ActiveRecord::Migration
  def change
    create_table :restaurants do |t|
      t.integer :ot_id
      t.string :name
      t.string :address
      t.string :city
      t.string :state
      t.string :postal_code
      t.string :image
      t.string :reserve_url
      t.integer :price

      t.timestamps null: false
    end
  end
end
