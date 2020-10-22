import "../style/style.css";
const src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAYAAABRRIOnAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAhKADAAQAAAABAAAAhAAAAADOBoV4AAAdB0lEQVR4Ae1dCZhUxbWuqtvLDKtIAib6xOBO1Kghiy/mieYzGBSFHqaZDZIQfRETE3kasrzggon6YURfNBpjJMrszSwgSiRGcYnPJUR9bhF3jCAugLLOTPetev+5Qw9NT/et6p7ume7h3u/r795bderUOf85Xbe2ey5j3uEhkIAAT7gekEullFi2bNWYWGz3mBhnpT5LlCglS6QtOON2h2J8t0+x3SrIPzl63LiNEydOjA6IoFlWunbtWv+69es/yzvVSNKPM1XKlFUiLKk4Fx0xW3aQfj5f6Qfl5VM+4JzLLKvKSbF+d4j6e+8dpXZ2TmBKfV0qdTKsfig0GcoUG64IMMWCuC9VHHcACm6xGwh1MiV2cq7wY+8oxV9Q0nqixO//v3D47E05QSJHTCKR+w7qiEa/wIV9CuQ9Xil2KOQdyrgcKhgLSsVKmaMnNGVwdM46cbUbadtxv1Mx9Y7g/BnG+WN8aPDl6nPO2Zoj0YzY9ItDkBOwHV3/EZOyCgY9GpJ9Fg7xaSMJ0xCBzw60Hm/jvE5KttIX5A9Xl5WtT0Oe1+T61tZxsoOfxix5LhzgaHjyYTgP61OlnH+I8hvBZ51PiAY2LPBofzhHXh1iaVPbcUKyasXlZPwdjoQT9A2kNAijlYnhH/Ya/l2PCC6WBETomXCY22nIc5IciSirS7adjEfed8FwElqzI1G/LyfMk5lwvgOGeo0rsVoKVj+7IvRiMkmu7vPiEA0NLZ+3BfsBvPubcILDcyWsIZ93ueDPWkIsqiyf/jieydQ05+yAA/DGZe1fs6Wcr6Q6CYwPyRlzE0acv8Eke8DH2S1VVTNeMimSCU1OHWJpW9sY3il/AgGmAbgjMhEk57ScbeBM3O/nfFFFRejVXPBvamo7KqrUfMXkWWgRDs4Fz2x5wNFfR9nlKiiunx0KfZAtn+RyOXEIaj5t1nZ2zFa/gKBflFLmp+lMlt7onr/CBbvjkLGjbz399NM7jIokEa1Zs6bk3fc3X6Qku4AxdUxS9oDdCiFi+OP9w2fxaywWui8Xj8k+OwR1GOWO3b8CWOVApk8dxfwhy7ej136/n4n5lZXT386knsbG9sOiTC7Co+8sOMPwTMr2I+2HwuIRPrRkQV87nn1yCDShx8aUvAmdqdPRX/D3IwDZVcXZsxjGXl5TUX6vCYO6pmXnYJi4EI8H6isU9IHRVhSd6zXM8s2rCU97OVths3aISNs9Z3R2dt2IJuuEbCtPLgelYhhKdkCo3XAyyh4KJUupI5dMm+09HmnrwWxhTeWMJW486hpb5kCCy1H3ODe6TPKogwu9dqPMTuhFGjoTVUi0MuHjRos6ng8GA/PCoXMfcqNLl5cV0I2RVvQX0DIoln3HkSZkGF8PVDbBEV5HB/BFJiQ8m3dBqQ4pVYwpOUIp33DB5WjJ1BehxAmgHwUsD4ahRqZTSpcO/pjMEjfUVEy/gYyUTF/b2HYZY/JS1HFQcp7pPfh+Alk3QFaaWHpeMP4PqcRmzmN4fIltQnAf+JfgMRRgUkxAR/U4B0/ODoLTjENZmqDL6iA8MeN7SWW47L5MGWTsEGhGv4Vm9G4InHF/AQ4Qwwzk65iEXAtBW/3CemHmzGlvpjJKKkUAoGhqWnGwsuT4mG3PRrkvM6mOgEUBbIYHZ1sEE7fXVJb9Il4S/PnS5vZ5XNoLkTY0nm56Bpgd6Ku8DoM+7bOspdwWb1ZUnLcBcmKyVX9Q/c3Ny8dHpX08qMuA1URgBf0yn9+AU7y1xynu0de8lyIjh6hrXPYNgL8EnnzoXhb6K/TyO/EveBHnJZYSqzLt2KWrwZkmlp1f50peDJqTAGhmE1+c72JCzJ89M/Q7qqOuofVi/FOvgI6j09WZKh1TzZg1Zc8ywW5hPv7YrLKy91LRZZpGHVqbyynosM9B63kczhm1GjQtHvD5z6wsn/aYad3GDoHJphNszuoB+nGmzIkOFbzAhbhjSIA3hEKhzZmUNaVdunr1UPHx9hkAbC4McyJGBBkAx9/lzL6EWRZTNrsJTbj5RBPneOyx59Bi3sZHD2+ZPXnyTlOZM6Fra2sbvatLVSkpL4B+1HoYH2idXrQUq8Yk1vMmhYwcoq619RDVxZqwCvk1E6ZEg5W8j2CY+3zcujJXLYKubmcIvH33PHRM56Bu44kjNK/vEO+MWj7OMfGllojhpTf2dain0yueTy1GTNlXMq4mQ1bj/g2c4nEe4BU1ZWXvxnmlO2sdgpZv//nqW3+EhWfRMy4do8R0EK3nFr+iOlxWa/r8TCzf1+vahraz0MTScHGiqcymdUIf+Btbi0fg5bOqQveblssVHfQR9ZHWWcpWV6G1GGfC15FZqdpjj/rc+brtA1iRdT9eee3t7wCAqabAouP4MvzmopqZM+4eCGcgbchQ3M9D+AffAxli7hqa5zq8OFtBvAfCGUhSwpSwJYwJaxPpHdvBho4tNQVc//G0WsmkvQw8jtHw6c7m7Ck/43MrK2c8a0SfZ6L29vYDduy2b0e7dl5m/YreguGx0qWYaB9eIi6cPn36x70p+j+lsbHlJHj7XTC46VzQK0xY5W6rpWlbCGqahJI0JDNzBsY3cytQUyjOQOYhwwV9w+bikuYCuigtuwP7nRhvFyNL/7NQnIH0IKyFn83Av/opQ72OIZuSbdPRp81oiLSeid7zN9IVTEzHpMtLloVmNHwercAV1BEOn7XFGl4yAf/wB7IWjKt1Jdawi2qmTNmWNY88FayeMeM17vNfgCn5l0yqwJzGGXWN7d9MR5vSIWgYh11IP0O/e0y6gvF0AL1RWOyX1TPLHo2nFdqZRgHKCl7sdAYzFA57K/4e4L4QOVaGRfuNHGsXL8BWC8gWukoxOhmL7Xw/JRunok3pENbWbdjhpE5OVSAxjSZkMLHz+6qZM5Ynphfi9ezwuW8xFpiLXhnOhgdolfJfVFEx/Q3DEgNGVlMZbseu3dvR0dyhE4JsSzZORdfLIWiYaaNjiCHbiFQFktKWH3v4uOuS0gr2dnbleWsB2N3oqxv0J7CmAloqU7AKJQk24YjDrmVCrUhK7n0L25KNydbJmb0cYt0b60+FM3whmbDXPebshWLX6ca1vcoNcELQGnozmlatkYmGaAdY3IyqJ1tYkl+LVlDfl4ONHVsn1dDLIbBP8LsYomkXrgRTq/Kxpy9JvpzfOn0BJa/Gvz/ttjMnDzSF3G9IB4xjE8X/nC6/Jx02dmzdk9B9sY9D1La2fgatg7bvgLm6dZicuSWJV9Hc1lSW/wXCui34PLaHpmh0ShTUCqib4dTrEtNSXsPWjs0TMvdxCBGVp2KefHxCfq9LZ/ZRiOU03OmVWSQJpIPwWYuwJ+JfvUUW/6I8R8/emUWR4tiG8+VaHWBrx+YJWu3jENiEMhNzD6UJ+aku1wWtQFE9W1MpUR2e/jRm3h7slcftB6vKp/29V3qRJeyxkWsrQbYmmyeq1uMQNM2L1+W0O6CwX2BtODx1QyKTYr3GS0Q34l/UM6TE9ZvCCizGGetGxX2QjchWOi0waXmEY/s9hD0OsSvKjgIKY90Y4Lm0HRsuGt1oiimP9ghgkWhVXGZc39c9yRNPKe5zt62w49z9GEu2j5P0OISKyYkYXbivsWNbll3qfzJeeDCcuc/3W6wFrHN+uB4MOsV1EKr0KQyf3SfiYHPH9nsK7XUIrk6JM0p3RgvyTn9tBkknQ67Tu9dfxMPoYD5ciGsxfdG3e4itUnSc9+WKvZs9tvfFszCdeVj8Ot0ZW+EeSZdXzOmzqsouLGb53WQXlvWwbdtnu9EwxQ+L5zstRCTywEj0D4bHE1OeaSOpzZ5JmeclFiwCNtmM1pzcDq6Gkw8QieMQUm4fixYi5epXAp+PfEy+n3DvXRYDAoLRjOxHbqKS7aPiE2dl23EIRO8ZjoGWq0NgJLa9pERscmPs5RUeAsMC7D2ynZtkZHsRZXtbCIrphKVT963rikdHjRqVl23mbsJ6eX1DoKSkZAf6CFE3Lph3CaJRcOzf/ciwcaN7lwFek+3r9G7CeHn5RWDKlCl4SQrbYlwOZAeZlCVE4jiEEHYQ41UnIV05bFSll1S9owgRwA7KXW5iO7bnLEA0jkMgohvFaNJsGhHujxS3Gr28AUZAY7tu2zsxuRyHQDzInZi2dfUi7Nnzr1y5csgAa+ZVnyEC3TZTvXZGJbJxbM+F0z/c4xAW4hW4PxIEV76t0eiwREbedeEjQDYj27lJiqgVu/Hq5V6HED65C2PRDrdCiLsaZDGf69DUrbyXN0AIwGaO7dyqRzwOJuwEh4j6d2IsqulDqBLBpNdCuAFbgHndNqPAJC6HUl0CPkAUziOjpETuwvSm+1hV8VFc2aNc2HpZBYgA2QxBR9ztBts7PhB3iGnTpn2Ca8dD0umER8pwDGa/mi7fSy9MBMhmZDuNdDvhA85baU4LQTuE0Kl8RVMIIZ+k5xA6kAos38hmiq+DDzhhj7pHGVACU9f6F0axTJruFbACw8ETBwg4toLNtGAI9mScpsch8Pd/0Yn6Es9JccYS+Si2defnUmR5SYWIAGyFf75r/4FsjpnKl+Li9zgED4h34BRpX16hApLJg7En4vB4Ye9c2AhYjB0ulTzYVUqyuY+tj9P0OER1KLQRHRDqXLodfsSMnOFG4OUVDgKIOU62cp+lhM3J9nGpexzC6VRw8UI8I+2ZsxMpHGDafC+jIBBoaFgxFpMKJ2qFgc3jHUqi7XEI54bLlegnuA4/QTe+i3X0bMqkct5RgAhY0VOw6D3eTTKyNVr8lYk0+zqEDPwdwSTeSiRIvkY4miHS3vdtn2Qa737gEYhJVoE9Lu6LkbC1IJsnHPs4RFXVee/j7S3tYwOLIcdHIivdOysJlXiX/YsAxRXFUoQ+wCls7dg8Qbx9HILShV+0IASxbjPM+A4Z/fcEPt5lASEgoxyPdPeXtulrh5ZltSaL3cshlFBPY3zp/thAsHHEl/5+qggkyRV49/2LANmEbIMRo+uCFiYi35I+2WsyspdD7Al/u06nBio8IVUEEl05Lz+/CJBNsHahjVuJvuArqUId93IIElf6RDNmr9xHG4hAgs4lvrxnFu44vzB43AkBsgXZBEFfPu2GCNlWWSKSiialQ4zwi9Vgql/sYmxiXXPbSakYe2n9j0BTU+uJaLknamuGbR0bpyBM6RAUrZXDgzBh4Wy8TFFuTxJ9+UWdnz7fy+lPBBDm+AK0E+Pc6iSbkm3TReRN6RDEUHL/MpxedWPu5Cl1RlNTu7e+oQUqvwSODWALg1pe3WPblKRpHYICfaJz8kjKUomJnB/VJWM/TEzyrvsfAccGsIWuZrJpdxDX1JRpHYLIEdn+Tmytc40vQB0ZHOfWR9r18+apZfBS+4gARcUnG2g7+LClY1OX+lwdoqKi7Bn0SJ9zKe9kQZDxsZj9c5xd+en4ePmZI0CYYzPsT8kGutJkS7KpG52rAeF12AIhbkUr8aEbE8pDRPzTGiIrztDRefm5RYAwF4pP0nIlG8KWjk1diF0dgsod8plRf8Wq2BMuPJwsRDwbG5PRn0Ui/6sLa6hj5eUbIkBYE+b417oGiyN2ZEOypY611iHwxncMTc21YPmujhk26n4par/nbaDRAZWj/C61sQzbo7+sZ4cvD8KGZEsdrdYhiEH1zNBTnKkHdMwwmTUCgTAvjkRWuc6Uafl4BFoECGN8/fjHmHfQbbFH66AeIBtqmYLAyCHw3FH4astv0Oy8pmeqTo7KXfTNbDQY3pEPBAhbwhgAa2eJyWaO7WBDE1mMHIIY0Rfnwbwdl66fLcYuHQtf4ymrb24500QAjyZzBAhbfLS2jLDWlJZkM7Kdhq4n29ghqITFrVvglS/1lE5zgckPRNUXVzasXPmpNCRecpYIOJgCWzyaP6NjQbYim+noEvMzcojKymn/sgS/C1+318SSwJONyS/ZO6I/TazMu+47AoQpYavlJPguxKj8E9lMS5tAkJFDUDmfGP0HeN7jCTxSXqI58yEsVUVtY/uklAReYsYIEJaEKWGrK4xe3+N+PuoOHV1yfsYOEQ6fvgOPhAVoJd5OZtb7nj6sbi+kb3L3zvNSMkGgG0N7IdpeYKo5YBuyEdlKQ9krO2OHIA6zK2c8hU8L1Jl9zIx9Re7soI+HomHxjmwQIOwIQ5T9ir487yLbkI30tL0psnIIYsNHBhfDW5/uzXLfFCgTwOt/s2ub22fum+PdmSJA2BGGhKW+jHq62zZ6ylQUWTsERcX3+awrMOuxIRXjfdPUGOztWlAXWT5h33TvTodAU1PbsYQd/nxjdLRkC7JJX75YkLVDkHBV4dBDXFktmBbV7KyiUQebwGRscd2qVSO0inkEDgKEVYzJGx3sNJiQDcgWleXT12hIXbP75BDEOegLXocHyFrXWvZkQrFJ6pOOBV5/Qo8WYbQHq0l6aqLga8kWNKtsRp+aqs8OEQ6fvQmTUGjS9Itf+E4khVCetXRZW1lqcbzUOAIORsAKQ0yDgLHAHjZwbBFnkOW5zw5B9c6qCj0Az/wDmq2dOjlomVzE5OV4Nmq3e+l4DdZ8woYwIqx0OhLmhD3ZQEdrkp8Th6CKDhgWuAHNnJFQaNOOjyp569K2Nn1HyUSLQURDq5hRZt9KGBmq9RfC3pBWS5Yzh5g6deouK2hdiskG7Za7bqnUJN7JbvA21Oy10Zo1a0o67Y7F6IFP2pua/oqwFgFxGWGfniqznJw5BFVbXVb2pt9vLUAz1hORJJ04tFKnmD09am/6pdfJxCgMnciNm7YuIEwIm3S4xdMJY8KaMI+n5eKcU4cggSrKQ/dim8Vd8N4OrYD4kgu+1XB+bVPbHC3tICcgDAgLtA7a8NHd2Iq7urHOLTA5dwgSL2gdeC0mSR40ERUdpzGcyf+ub2493YR+MNKQ7oQBYWGkH7B1MDYizowoLw5BiyrCz+cJYdafQBP5Ofw7FtdGVhydmfjFT006k+6EgYk2aB2eI2yzWbgy4Z8Xh6CKnS/UK3YZhkRvmQiCOYoTmR393f408nB0hc6O7iYgcf52sCR4qYOtCX0WNHlzCJKlprL8QcH5dXh8aN/r6JZdTWKd6pYVK1ZoN45moWtBFSEdeYe8Gd3JSSaC4Y/1IYx1TTh07kMm9NnS5NUhSKiqmaE/winuRK9YP2mF3jWepedu29m1mIZg2SpV6OVIN9IRGwLOMxxRYPKJ3VldUXZnvnXLu0PAs+XIocGr0Xu+RwhdeAEafmGqlvOKDe9vuQrAaXcG5RugXPMnnTa8t3khpvopSpx2WtrBDNgRhoRlruVJ5pd3h6AKnUkrFpiH3diPJguQ6h5j8mGI4n7Bu5u2XjqY5ihIlw3vb74Mu5nOx8/oYzSEmQXscjn5lArzeFq/OARVRuHvAkL8ANvCn49X7nbG1O0opux5dc3LL3SjK6a82qblc2DgHzi6GQhOWBFmyaEDDYpmTdJvDkESVlSE/onV2f/C89Bs5MHYWCXtX9Q3LavOWsMCKVjX3FIDB78SD0X9nkjITBgFSwLzCLP+VKFfHYIUo5EHlmqvwchjk5mi6hD8q35d29xStEvmJLuy1a/MnYFvUkz8Ot8jilT497tDdDtFCKMOvpgJviWVUMlpaGLHYU/WosZI69nJeYV+78gM2R0dDITFiGwLXrdaPKsitMSAPOckA+IQcAYVFGXYpMv+gMZxu4lW6IQhKIm6sbah7SwT+kKgqWtunR+z5U0ku5E8QgALfnspsCGMjMrkmGhAHIJ0CIe5/akRQ64UFqvH81K/EIYyAPZIvOdx59KGZZfmGIecs2uItJ2pbPljDKOPMGFOGCCGeN2BI0uvImxMyuSDZsAcgpShL9cH+OifALTlGG9rYxdQGfxtPot/0fnNrSsKdjGMZLNj9s3dspLU7gfpThgErdHzCRN36vzmDqhDkGq0SDOsxPohwPuzeTOpjumKdt0WabvnjPzCkzl3kolkgz5GC3WkM+lOGORrwSoTLQbcIUjYUCi02af8mG/gfzUVHq/DH93Z2XVbIbUUJAvJRLKZ6kE6k+6EgXmZ/FFiNbVwjsbG5f8WY/ZdeKE1g38+fxXPkR/Nrp6xeiA1WVrfMhlD6d/ioWa8eRhfxHvIx6zvZPqGdj71LIgWIq4gAeNj4ntc8EfjafozDCD475bWLwvpafND4dQNGTJxBsX4o6RrITkDoVNQDkECVVZOf9vPrDlwCm3IAaJ3DiUPRy99sTMbGE/rpzPVSXXjE5eHm1ZJugWFNYd0NS3TX3QF9chIVJreTeiScgX+dcckprte491GNMNXz6oou92VLkeZtU2t38fjbQEeWQebsoQzPOln4tuYktbHETdlmkO6gnUI0tHZUdQp78cysTa4VhwT9No3AfQbq8Oh3+A6L8vFWLUUtU3tP8bejfm4Nv5kJRarNitf4EtusabjegzUuaAdgkBpaGk5xo6yPwH4r5qCBKU2oxm/LWBNuDoc/nyXaTkTukjkpUCX/TLeT2VzMVwcbVKGaOCcT/qYL1xofYZk+QveIUjg+paWI+2oWoKm+dRkBdLdwwDbMPyrHTUiOD9XewlWrlw5ZOu2zkX4SB3euVTmb7Fz9jfLz+fkcy9kOhwyTS8KhyCl6ltbx9tdkpziNFMl0UrsxlBwmRhWeklfYiY49SMsktyx+ybUX47WwTx8M2ePWAExJ9cv1JhikCld0TiEY5TW1nF7nMJ4ngJOEUXTvhqvvM1N9dExE8DoO5iyS94GsCbDGfwmZRwazh7a4wzrjcsMMGFROQRhRcZhXfIOqdg3cWs0bMbjA3ZUfxOW/8JMgng69SHqjbSjv0eH8FQ8Jkzxkvgu5l9YQFyQrRNS3QNxmCo4ELKlrZM+Rt8Z24XPNrBzMvnHYvTxnJTiom9XhZ5Iyzwh4+6GtlOEkLcavzfRXTYKUO/FPsi5/bn1LUHsPl0a/cP6VEMeClNgDDGi9HuIrdsM9kZL5yQGGRYbv++ua2zVBkBb2tRWIZi8O0Nn6ODcaibZitEZCKOibCFIcDqWrl49lG/Zfj3mKWahn2C0i5nKYfJqI7af/E91Ze+5CjwWRH1j22UIBEh7GbDUbnYAyB1gXKsOHP6T2ZMna99BMePa/1RF7RAE16pVq4JbPt51NRxiDvoJxvMCcIuPhVC1bMTQX9ZMmbKNeDkB0bbt/JWSHA6mDqA0kwMd182IHLvkwAOGLBjo/Qwm8rrRFL1DkHL08ovzDgezL8Gw0HjmEP/oTjwz77eY72LiY7PYzZjaPMvkBRqidw5sFubMuumQg0bdYPKBknixQj0PCoeIg9vQ1PZdbD26HJ2Fw+JpRmfOnsAoAkMR89lQhy9CCPs4X1hVEfqTUT1FQDSoHILwrmta9i10AxDvSh6bT/zRD8E7JvLSmoryP+eznv7mPegcggDEdywnYjbqNowrJuYHUL7Wz9ncysoZRvE58yNDfrgOSocgqOjTx4h0B6eQZ2C0oI3ZZAIvOo/YDS0e8nMxt6Ji+hsmZYqNZtA6BBmCQvx12bvovYhpcIohfTEOnGEX+hnLA9aQS8LhKYbxLvpS48CUHdQOQZDSCuXH2zqvwqTzbDxCzGI4JdkCjvABRi9LDxgRvCJXK6dJVRTM7aB3CEKaJpuWNrZcCMPOx924zNDn6/HexCJ85vD3+dpwk5k8+aXeLxwiDmH3zmh1Pe6Pj6e5nxG6QLH5A72j213G3ObuVw5B0NH3J9DZvBmT9qdhnSJlhBosgsUAzMPYFf2j/n4dP7fmzZzbfucQBBF96lDu6LoecSFD6Gwm7XziH+NLuO3W8JL5VVOnfpQ5pMVdYr90CDLZ2rVr/a+8un4evn+Jaet4EA98I1uI3x57xKE3TZw4MVrcps1O+v3WIeJw1TZGzsa+l2vQ4UTnk/0c/YVV8TzvvJ8iQO+A0G8/Vd9T20MgPQL/D0JWs5i9tqEQAAAAAElFTkSuQmCC";

// image handler class
class ImageHandler {
    constructor(src) {
        this.image = new Image();
        this.src = src;
    }

    onload(func) {
        this.image.onload = func;
    }

    getImage() {
        return this.image;
    }

    init() {
        this.image.src = this.src;
    }

    draw(cnvWidth, cnvHeight) {
        return ctx => {
            ctx.drawImage(this.image, 0, 0);
            this.imageData = ctx.getImageData(0, 0, this.image.width, this.image.height);
            ctx.clearRect(0, 0, cnvWidth, cnvHeight);
        }
    }

    getImageData() {
        if (!this.imageData) throw new Error('image has not been initialized!');
        return this.imageData;
    }

    static create(src) {
        return new ImageHandler(src);
    }
}

// mouse handler
class MouseHandler {
    constructor(cnv) {
        this.x = undefined;
        this.y = undefined;
        this.radius = 100;
        this.cnv = cnv;
        this.__mousemoveHandler();
    }

    __mousemoveHandler() {
        window.addEventListener('mousemove', e => {
            this.x = e.x + this.cnv.clientLeft / 2;
            this.y = e.y + this.cnv.clientTop / 2;
        });
    }

    getX() {
        return this.x;
    }

    setX(val) {
        this.x = val;
    }

    getY() {
        return this.y;
    }

    setY(val) {
        this.y = val;
    }

    getRadius() {
        return this.radius;
    }
}

// create particle
class Particle {
    constructor(x, y, size, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.baseX = x;
        this.baseY = y;
        this.density = (Math.random() * 10) + 2;
    }

    // draw individual particle
    draw() {
        return ctx => {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
        }
    }

    getColor() {
        return this.color;
    }

    update(mouse) {
        // collision detection
        let dx = mouse.getX() - this.x;
        let dy = mouse.getY() - this.y;
        let distance = Math.sqrt(dx ** 2 + dy ** 2);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        
        // max distance, past that the force going to be 0
        const maxDistance = 100;
        let force = (maxDistance - distance) / maxDistance;
        if (force < 0) force = 0;

        let directionX = (forceDirectionX * force * this.density * 0.6);
        let directionY = (forceDirectionY * force * this.density * 0.6);

        if (distance < mouse.getRadius() + this.size) {
            this.x -= directionX;
            this.y -= directionY;
        } else {
            if (this.x !== this.baseX) {
                let difX = this.x - this.baseX;
                this.x -= difX / 20;
            }
            if (this.y !== this.baseY) {
                let difY = this.y - this.baseY;
                this.y -= difY / 20;
            }
        }
    }

    // factory
    static create(x, y, size, color) {
        return new Particle(x, y, size, color);
    }
}

class Drawer {
    constructor(cnv) {
        if (!cnv) throw new Error('Canvas is not defined');
        this.ctx = cnv.getContext('2d');
    }

    draw(func) {
        func(this.ctx);
    }
}

class ParticlesLayout {
    constructor
    (
        selector = 'body',
    ) {
        this.selector = selector ? selector : 'body';

        this.particlesArray = [];
        // before init
        this.__beforeInit();
    }

    setImage(image) {
        this.drawer.draw(image.draw(this.cnv.width, this.cnv.height));
        this.img = image.getImage();
        this.imgData = image.getImageData();
    }

    init() {
        // init particles
        this.__init();

        // set listeners after init
        this.__afterInit();
    }

    __beforeInit() {
        this.__appendCanvas();
        this.__initObjects();
    }

    __initObjects() {
        this.mouse = new MouseHandler(this.cnv);
        this.drawer = new Drawer(this.cnv);
    }

    __appendCanvas() {
        const selector = document.querySelector(this.selector);
        const element = document.createElement('canvas');
        element.className = 'canvas-particle-layout';
        element.width = window.innerWidth;
        element.height = window.innerHeight;
        element.style.setProperty('position', 'absolute');
        element.style.setProperty('top', 0);
        element.style.setProperty('left', 0);
        element.style.setProperty('width', '100%');
        element.style.setProperty('height', '100%');
        selector.appendChild(element);
        this.cnv = element;
    }

    __afterInit() {
        this.__resizeCanvas();
        this.__mouseOut();
    }

    // resize event
    __resizeCanvas() {
        window.addEventListener('resize', () => {
            this.cnv.width = window.innerWidth;
            this.cnv.height = window.innerHeight;
        })
    }

    // mouse out event
    __mouseOut() {
        window.addEventListener('mouseout', () => {
            this.mouse.setX(undefined);
            this.mouse.setY(undefined);
        })
    }

    // set array of particles
    __createParticles() {
        for (let y = 0, y2 = this.imgData.height; y < y2; y++) {
            for (let x = 0, x2 = this.imgData.width; x < x2; x++) {
                if (this.imgData.data[(y * 4 * this.imgData.width) + (x * 4) + 3] > 128) {
                    let positionX = x;
                    let positionY = y;
                    let color = `rgb(${
                        this.imgData.data[(y * 4 * this.imgData.width) + (x * 4)]
                    },${
                        this.imgData.data[(y * 4 * this.imgData.width) + (x * 4) + 1]
                    },${
                        this.imgData.data[(y * 4 * this.imgData.width) + (x * 4) + 2]
                    })`;
                    this.particlesArray.push(Particle.create(
                        positionX * 4 + this.cnv.width / 2 - this.img.width * 2,
                        positionY * 4 + this.cnv.height / 2 - this.img.height * 2,
                        2,
                        color
                    ));
                }
            }
        }
    }

    __animate() {
        // animate every particle
        requestAnimationFrame(this.__animate.bind(this));
        this.drawer.draw(ctx => {
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, innerWidth, innerHeight);
        });
        for (let i = 0; i < this.particlesArray.length; i++) {
            this.particlesArray[i].update(this.mouse);
            this.drawer.draw(this.particlesArray[i].draw());
        }
    }

    __init() {
        this.__createParticles();
        this.__animate();
    }
}

window.addEventListener('load', () => {
    console.log('page loaded');
    const image = new ImageHandler(src);
    image.onload(() => {
        console.log('image loaded');
        const layout = new ParticlesLayout();
        layout.setImage(image);
        layout.init();
    })
    image.init();
});
