class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :user_id
      t.integer :restaurant_id
      t.string :restaurant_name
      t.text :review_text
      t.date :review_date
      t.integer :review_score
      t.string :review_title
    end
  end
end
