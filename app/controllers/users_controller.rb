class UsersController < ApplicationController
    wrap_parameters :user, include: [:username, :password, :password_confirmation, :renter_created, :renter_name, :renter_location, :renter_info, :renter_image, :owner_created, :owner_name, :owner_location, :owner_info, :owner_image]
    def new
        user = User.new
        render json: user
    end


    def create
        user = User.new(user_params)
        if user.save
            token =  JWT.encode({user_id: user.id}, 'secretkey', 'HS256')
            render json: { user: user, token: token}
        end
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
