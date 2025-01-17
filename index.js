<script>
      var products = [
        {
          product: document.getElementById('product1').textContent,
          qty: document.getElementById('qty1'),
          price: parseFloat(document.getElementById('price1').textContent),
        },
        {
          product: document.getElementById('product2').textContent,
          qty: document.getElementById('qty2'),
          price: parseFloat(document.getElementById('price2').textContent),
        },
        {
          product: document.getElementById('product3').textContent,
          qty: document.getElementById('qty3'),
          price: parseFloat(document.getElementById('price3').textContent),
        },
        {
          product: document.getElementById('product4').textContent,
          qty: document.getElementById('qty4'),
          price: parseFloat(document.getElementById('price4').textContent),
        },
        {
          product: document.getElementById('product5').textContent,
          qty: document.getElementById('qty5'),
          price: parseFloat(document.getElementById('price5').textContent),
        },
        {
          product: document.getElementById('product6').textContent,
          qty: document.getElementById('qty6'),
          price: parseFloat(document.getElementById('price6').textContent),
        },
        {
          product: document.getElementById('product7').textContent,
          qty: document.getElementById('qty7'),
          price: parseFloat(document.getElementById('price7').textContent),
        },
      ]

      var carts = document.getElementById('carts')
      var total = document.getElementById('total')
      var cash = document.getElementById('cash')
      var change = document.getElementById('change')
      var errorMessage = document.getElementById('error-message')

      function addOrder() {
        carts.textContent = ''
        var totalPrice = 0

        products.forEach(function (item) {
          if (parseFloat(item.qty.value) > 0) {
            var order =
              item.qty.value.toString() +
              ' pc/s x Php ' +
              item.price +
              ' ------ ' +
              item.product +
              ' ------ ' +
              (parseFloat(item.qty.value) * item.price).toFixed(2) +
              '\n'
            carts.textContent += order
            totalPrice += parseFloat(item.qty.value) * item.price
          }
        })

        total.value = 'Php ' + totalPrice.toFixed(2)

        cash.addEventListener('keyup', function () {
          var cashTendered = parseFloat(cash.value)
          var changeAmount = cashTendered - totalPrice
          if (!isNaN(changeAmount) && changeAmount >= 0) {
            change.value = 'Php ' + changeAmount.toFixed(2)
            errorMessage.textContent = ''
          } else {
            change.value = 'Php 0.00'
            if (cashTendered < totalPrice) {
              errorMessage.textContent = 'Insufficient cash'
            } else {
              errorMessage.textContent = ''
            }
          }
        })
      }

      products.forEach(function (item) {
        item.qty.addEventListener('keyup', addOrder)
      })
    </script>
