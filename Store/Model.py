# store/models.py

from django.db import models
# Assuming you are still using the User model from the RrrChat project
from django.contrib.auth.models import User 

class Product(models.Model):
    # Identification
    name = models.CharField(max_length=200, unique=True)
    slug = models.SlugField(max_length=200, unique=True) # Used for product URL (e.g., /products/t-shirt-1/)
    
    # Description and Pricing
    description = models.TextField()
    
    # Use DecimalField for currency to ensure precise calculations
    price = models.DecimalField(max_digits=10, decimal_places=2) 
    
    # Inventory
    stock = models.IntegerField(default=0)
    
    # Status
    available = models.BooleanField(default=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    
    # Optional: Link to a seller/owner (if multiple sellers are supported)
    # seller = models.ForeignKey(User, related_name='products_sold', on_delete=models.CASCADE)

    class Meta:
        ordering = ['name']
        
    def __str__(self):
        return self.name
