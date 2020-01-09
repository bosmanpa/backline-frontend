class UsersController < ApplicationController
    def new
        user = User.new
        render json: user
    end


    def create
        user = User.create(user_params)
        render json: user
    end
    
    def update
        user = User.find(params[:id])
        user.update!(user_params)
        render json: user
    end

    private

    def user_params
      params.require(:user).permit(:username, :password, :password_confirmation, :renter_created, :renter_name, :renter_location, :renter_info, :renter_image, :owner_created, :owner_name, :owner_location, :owner_info, :owner_image )
    end


end
