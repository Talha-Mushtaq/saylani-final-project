var ObjCards ={
    Cards:[    
        // {
        //     id:'123',
        //     title: 'Pc',
        //     rupee:'12000',
        //     detail:'The System Information app has been included with Windows since before Windows XP. It provides a much more detailed look at system information than you can get just using the Settings app',
        //     pic:'data:image/jpeg;base64,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'
        // }, 
        // {
        //     id:'456',
        //     title: 'Tablet',
        //     rupee:'50000',
        //     detail:'The System Information app has been included with Windows since before Windows XP. It provides a much more detailed look at system information than you can get just using the Settings app',
        //     pic:'data:image/jpeg;base64,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'
        // }
        // ,
        // {
        //     id:'789',
        //     title: 'LCD',
        //     rupee:'50000',
        //     detail:'The System Information app has been included with Windows since before Windows XP. It provides a much more detailed look at system information than you can get just using the Settings app',
        //     pic:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSExMVFRUVFRUVFRUWFRUYFRUVFRUXFxgSFxYYHSggGBolHhUVITEhJSkrLi4uGB8zODMuNygtLi0BCgoKDg0OGxAQGyslICUwKy0tKzcrLS0rKys3NS0vLS0tLS8tKy0tLS0tLy0tLS4tLS0tLS03Ky0rLS0tLS0vK//AABEIAMMBAwMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAIDBQYHAQj/xABMEAACAQIDAgcLCAgEBgMAAAABAgADEQQSITFBBRMiUWGRkgYHFBcyUlNxgaHRI0JUcrGys+E1YnOTtMHS0zOCovAVJCVDg8IWo/H/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQMEAgX/xAAwEQACAQMCBQEHAwUAAAAAAAAAAQIDBBESMRMhQVFhsQUUIjKBkaEzUtEjQnHh8P/aAAwDAQACEQMRAD8A7jERAEREARLWJxCU0apUZURQWZmICqo1LEnQCapW75vBa3+XZrb1oVyPY2Sx9cA3CJpDd9Pg7cazeqkw+9aWT32MF6PEn/JT/nUgG+xOfnvtYP0OK7FH+7HjawfocV2aP92AdAiaB42cF6HE9mj/AHY8bGD9DiOzS/uQDf4nPz32cH6Kv1U/648bGD9FX6k/qjAOgROf+NjCeirdSf1Tzxs4T0VbqT+qMA6DE58e+xhPQ1upfjPPG1hPRVupfjGAdCic88beE9DW6l+M88bmF9DW/wBPxjAOiROdeN3C+hrf6fjKT33sL6Ct/o+MYB0eJzfxv4X0Ff8A0f1R44cL9Hr/AP1/1RgHSInNvHHhPo+J9gpf3J6O/Jgvo+M9eTD2/GjAOkROf0++9wcdoxC/Wpj/ANWMyXBHfI4NxNVaKVitRyFQVKdRAzHYoZhlzHcL67oBt0REAREQBERAEREAREQDU++kf+mV/wDxfjU5wsjntbp2TuffU/Rlf10fx6c4bvH1h9s6iQy2HQbCo9ojjF84dYkthLTCW8Mr1lrjF85esRxi+cvWJUwlppPC8kcQucYvnL1iOMXzl6xIxEtMJPC8ji+CaXTzl6xPOMTzl7QmvY6kA17aNr7d/wDvpljKJKoeTnjeDaOMTzl7QnnGp569oTWck8ydEngeRx/BnMNQVHd+NU591xvN9ddSNg2aSSaqecvaE1wJKgkK38ke8eDYDVTzl7Qnhqp5y9YmCyRxc6928ke8LsZs1U85esSk1U85e0JhTRlDUpDtn3JVwjOGqnnL1iUGqvnL1iYI055knPA8k8Yzpqr5y9YlPGr5y9YmEyxljgeSeN4M1xi846xL+CHy1H9tR/FWYCiOUv1l+2Z/Bf4tL9tS/EWVThpLIS1H1bERKjsREQBERAEREAREQDUe+sf+mV/rUfx6c4Yh1X6wncu+x+i6/wBah+PTnCk1I9YnSIZPqKRa4IuLi4IuOcc46ZaYCZnhXhmtXCBxTIp5yPJPl2zWudPJFgNmsxT1/wBVOyPVOlVkcumiO1paaVtMlwNweKqsSyrZrapmvpz7rXllNzqS0xXMrqKEFqlsYViJaYibZV7nVYW4xV2bKRB5tSB0yC3c2PPfsiaVb3D6L7ozO5t11f5NWxqAr0jUfzmMDCbv/wDGwXCZ2ucx8nmF9kgYvuRRCRxzXvsyW0O/WSra5bwkvuv5Id1bJZbf5NaTXZLqy6+DC1KiAk5Gtc79Af5y4uEMspwk1zXM4qTinyZaCjml1aIlYw7DdK1Qy9Q7opc+zLYw59c94rnEk01kqmJbGkmUyqtGPGHlL4UzNU6KnaOqSEwY3HrlytclLutJqtTDkSy1Obi/BV93VMZjOBHGoF5TUs5LmkW072Enhs15llOWTGokaESlqcyOBtUyKg5Q9Y+2ZvBH5Wl+2pfiLMXxWo9Y+2ZPBn5Wl+1pfiLMVwsNGyg8pn1fERMpoEREAREQBERAEREA0/vtfouv9ah+PTnCU2j6wndu+3+i6/1qH8RTnB1Oo+sJKINx7pEfNRvSor8noAyhWGnLYkjlnrmtO19dnQNnsmw90WHANK2HdboSRe5ci16q5b2F9016qdTYW6CbkSys4ubcdjinGcY4msMtNM73NA8XUtbytb5fNGy/8pgWMzHAFNWRrgHl21A5hL7D9ZfUz3/6L+hlzUPR1D4TwMxIGlybbF39J2S7w1wQKHJPFsSreSBdSNCpG7o55GxRwhoKFp2rZqd2ynKV0ze/o2T0613w3DEc6uvb8GC2seNGo3PTp6d9/Pg9xNFlqKGykjONGQg2tvGnXLGPw5tmsBrrylN7ncBL/FUalVUoURdqBXKbC9Wy3IZhyddkj8IUaGHq1adWgtNGoll8khgxCFFUaobq2zX1Sit7TdCpp0Z2e51Q9mceGrVjdbGogDj691vyxvI+YsnUqFM849v5THNxYrVuK0p5xkGo0yjcfbJlN5qtKinBSxvl/kou4OE9OdsL8GQp4NfOPtH5yQnBynePeJDovJ1Jp6UFF9Dy6jmupV/wS/N7pcXueqbqTnpUEj3S4jmTcHUN9vzWH+kzqUMLKwUcaa3ZihwcRpqOgi0nYTgd3uFK6KW1O5dTMgmJcfObrNuqS8LiTrcLqpF8qg69IF5XUlKMW0jiFbXNRfVmGfg+opI2283X85cSuybQf8y/GbScPSLG9MDU7GYfztJdDB092ce0EfZKXdpLmi6NtKb54Odd070qlIOKNNHzqudMwJBDEgi9idBraai1MTpHfQwiUsPRK2u1YgnKFJsjHUjbOZVHmSVSE+cUetRpzhHEilxJWE/xKf7Wl+Isgl5Nwv8AiU/2tP76zy7t5kj1rVYiz6xiImI2CIiAIiIAiIgCIiAab33z/wBKxHro/j05whT5PrWd37736Kr/AFqH49OcHG71iSiGbT3R1UJpWesQFN841VtLhLkciYGowvySSOkAH3EyfjuFK1XKzMnya5VKlQcvNa+uz1zHVq7N5RvbZ0Tuq4uXw7HNPXp+N5f3KGMznc3qjjI78q/Iy6CwuSDu1HXMATMtwDw7Uwoc0whLbSxW9tDZVYdA1Estqip1NTKrqm6lPSjLY7hYOrFhXYoMmZiGVdvJLddtZkuAeDRiHyM+TRALBSeVpmszDki2trnUTTk4dYLUTKCKhBsTcLZr2sRqOj4yqp3RXAHEppvzG5tzzdRvfmUpY7PBhrWPyuEc91k2GhUNOutg7kM6gU7ZjZgLgHbcA6dPtlvuvw9bH10NGgw4lMjLUKI+ZzcckE6WHvmvDujYMGFMXFx5XPu2SbwZ3d1aDO6UxmcAE57WABFhyfV1Sq5lb1ZOep5+v8FtrG5pRUdKx/3k1vE0KlGo6Ml2Vgr2IIBCg7Rt0laYpvRNJoxPH1K1UqF4xg2UG4HJA279k8RZstIvhrD5GW7muI9S5nlDFOP+y/uk5Ma3oanulNMyXSaenTjL93oeXUlF/wBvqKeMb0NT3fGTsDimLW4qp5LeZ5p52Es0zJuE2n1GXYeNzJKUf2+p6uKb0VTqT+qSKGJbU8VU3aWTnA86VJMjwYq3e+3KLevjElVZtQZRQcXVisdfJcPCTAn/AJeuddwp/wByS6HC7bsJij6lo/zqQg1PrmUwlI8xnn1dj1bd5exo/fQx7VcPRBw9elaqTmqimA3IIsMjsb+sCczedb77anwfDg+mb7hnKqiXlEFmJ6WcMjrJtE/KU/2tL76yEUk6gOXT/aU/viYbrdHoW2zPrKIiYzUIiIAiIgCIiAIiIBpvfd/RVf61D+Ipzgp3esfbO9d979FV/rUP4inOBsftH2yUQZ3hLhvj8memuZM12GmfNlsSANCMu7nmPbEDci2023J9pBEi555mkHTeXkvVa17clRbmBsfXc/7vM33K1MF8p4WNPmAWzX02XP26TXSZO4MoF1PKAs2worbhvMcRU/iZVVcVHMjY8FU4P8GbPxfH3fJolsuuW/t6Oa0iYypgeIpZMvHXXjScuW19be7ZuveY6rwWWsM42iwWmoJJ0A5O3bslhuBBszm40Iy6gjaDrtlEa9OLk87nU/aNOUFDxjr2wbPTq8F+FKVFPiMjZxUy+VyLWub8+/ntGIfgvwprmlxHFjKUCXz3Onq2jXdaazh+5/O4QPq19co3e2TcJ3D1KtZ6CNmdFDGwGw7xr6uuenaSm6eqCTXPnnB5k+DJ/M/szGUrcZVK2tmFsvk+SNlt0vGgb3mOZOKd6YY8lrX2X0G6eVKtxPRt6qiua6v1ZTXpZfJ8sL0M3TpgbWA9okqlk84e+awmJl0YozfG5iuhgnayfU2xHpD5xknDY2gt7hzcEaZRbp12zTkrnnkqjWMsVZS5Gd2ml5ybWMfT3Kf8x/kvxkrB8IJfUoo02Zr3DKdrHTZNWp1JIRxLHCM1go4ahJNI2l+HHBNmJ1+YFHvW0pPdDU81j9Zm+yYClUUbZdbhqnT12nmnLo00stI4TqJ4jllvuux9StRTMFAWpplBGpVuc9E02pM1w/3UVMQMhCLTBBCqijUAi5Nrk2J3zXXeedVnHPJHt0KclFJntS0k0PLT9pT++JCJkyj5afXT74nl3by0etarCZ9ZxETEaxERAEREAREQBERANN7736Kr/WofxFOcCc6D1j7Z3zvv/oqv9ah/EU5wGps9o+2SiDJV61Qu166E3Gt7KxsLEWW1hs9khVqzMeUcxGl/bK6i6sBQYa2ty7oco0P2688iEyCSsmZnufUlHtubXUcw55gi06B3ssRhVw9bjzhQ/hS28IyX4rikuVza5b5vfsnFSnrjpKq1PXDTnBH4Jxi0qod0zoQyuo0Yows2Q/Na2l+YmxB1FHC+NWrVLomRLKqKTdgqiy5jva2l+gbdpcNVcITi8oQs1VzRdPJCX+bl5JBF7TbOCMFhamGZ2w9LUWzqELKdQCLm62sCdPnTHwH8rfL/AAV1fZsoxiozTzz9PPk53whwkuHC1HDsNVGRgrBiLhrkHQZZL4QTEUcMMcVYU3CHSshqhXPJLiw2ltxJF9QJb7u8BmpUAtJULOWJp02JtxZ2qlzbVe1IPCeNarhlw3EZWIRKldcPXOlI3DqhQZS5AzG56AMxm2nGpTiowlLH1X4KKFCjKH9Tf/ZhXxPGM1QXGY31tfYBrb1RmkWiCqgMCrDapBBB5iDK889GjL4Vk6qRSeEVE6y4ryPUMpDTTGZRKBOSrL9OvMaKkqFaWxq4KpUsmZXEdMrOMtMH4RKWxEs95wVe65MnW4QPPIjYgk6yC1eU8ZKJV292Xxt1HZEt6gllmlnPPC8qc8lyhgvK2syVHy0+un3hMQjaj1iZel5afXT7wmS4eWjVQWEz6ziImU0CIiAIiIAiIgCIiAaZ34P0VX+th/4ilPn3EsQpIFzpa3rn0F34P0TX+tQ/iKU+fi0lEMu4lMtZkTEGqgAIrinVQOxW5GU3YEG636JbNAekG3zKnPtvl9stl5TnjAyX/Bxf/EFufi6nNttaXsPiXoryGR9QxQ06mu617DSw55Czxmkxbi8oiSUlhmV4Q7pcTVtejRSwI+SoFLgjYddfzMvYHulxdEPRpsipUAJq8QzMDYCy38nQtrbd6phM0ZpD5pJ9AopPKRPw3dFjQpqk8umoRENJtUYre2t/mjXXZrt0zOM4fxCrhimJRzWycevgtQDClgua5zcu125vJmrZozS2NapFYi2jPOzoTeZQT+hX3ULUGKq5G48HI3GpTIVi1NCQACRdTdTqdVMxPy/o3/dtMnmkvg7AtWNgyrsGZ7hczbFuAek+wznXLuXqEUsYMDev6N/3bS3/AMx6N/3bTaf+Ete3G0gbsupqAZk8oXKagc+w7pjnIvo2YbiLgH2Gx641z7jRHsYf/mPRP2Gi2I9G/YaZfNGaNc+40R7GHtiPRv2GlJWv6Nuw0zV4vGuXcaY9jCZK3o27DS5Sp1Ta6suoB+TY2B2toN3NMvmi8jXLuNMexja2HYOwDFlDAB+KqDMu98pFwBzHWX/AxxLvxp41aoRKXEVBxlMjWtxh0W3mnWS7yoNGuXcaY9iA2FYWIzE3XSy7Ceg3/wBmZSn5S/XT7wlAMrpeUv10+8JDbe5OEtj6ziInJ0IiIAiIgCIiAIiQOG+FqeFpNVqbBoqjync7KajeT7tSdAYBqPfpxqpwZVp35dRqWRd5CVqbM3QABt5yBvnzycQx5p0/u0x7VcPXr12GZgBpsUX5NJL7tfaSTOZ0KRy6lRcg2Nrj1m17c4nSIFJ73uQs8qvY2U5hbb080t1hlazMpJO1bcWAd5NgeoSpjlYlxdQNAgCljbQ8peSttdn2wD3jG6I4xuiVEtyGzJlPlZVFwBa41Fi1uY+uetXLgsgVbaZSoJC7mbT2X0udwgFHGNzCe525hLvhOZrLYEKBqq8trC4UWJJJOn2yvw42UHKrXIJVEyBdNoe9ze+unt3AWQ77vtjl8w65Lq45lv5Nh5BWmuZwTYFg9xbadNd156mOe6G6ZB5RVFLG/wA0lgVDAdG+ARMr8w64yv0dckrwi5AylAQToyIWK7cxFiCPslT8Jm9lIsLEFkpWZtLrs93N0wCJZ+jrnln5h1yWeEnWwJGa5zHi6QAAOhNx06i0NwhUFyWVr6plSnY69IsR7oBEObmHXKeMYf8A7JY4RcnyqdjqbImZSb6bLC3Na08/4i5BsKdySOUiZtlwVy6W05vWIBENVuaU8ceiTKnCR5SgU9hIZkTTTYLWFxuFpa8NsLMASxGoWnp0+ToNn5wCxx55hPPCDzCS2xQAK5LnXlHizb1WUS1hK9yyMATuPya2HPci260As+EHoldOrcXLWNzpbdu3SmhWIYoQhJ0BYLYX0vmGgA0v7ZTQqZXKMFa9xrl6Ro+wc9+b2QD1sSQbDXpl7C4li6aX5afeEj5uLYqwRwbgGysObQ7jzHbJWCq2q02fycyXNgABcWuB9vXAPrXAY1K1NatNsysLg+4gjcQbgjcRJE5T3O8PNg6vKucPUPyo25DbSuo37sw3jUaix6pTcMAQQQQCCDcEHYQd4nJJVERAEREARE8JtALONxaUabVajBERSzMdgUC5JnI+GeHGxlbjWuqLcUaZ+Yp2u367b+Yac5NHdv3WDHVOLpG+FpNdSNleov8A3emmp8nnIzebbGYVpIMB3QVXxDkMjJRonkKyOOMfYazWGgG4e3fNer1wGsCHudzuqjUXY236Wsf5CdMxtQmi451nKsULMfXJIZ5igp5W3fYFibj17Zf4Oo03VuOxFOmTuda7MRbYppoQBsXla+yAdJZeAW6FXlDYEW1lJOUk7b21t6uaeVWsbI3lHlMCbWG8/nL9JNp3AX+A67T3wmoBYVHsNgztYey8ApZhcMMoI0BDHr9Zng1WzEMee5HssNLQcVV9JU7bfGeeF1fS1O23xgFdMkG5IYZcoUk2GnlXBvcbt3QYKNYBeSL3Nr69Et+F1fS1O2/xnnhdX0tT94/xgEl1uSQtiebNPAhygFcxGuYhrn+Uj+F1fS1P3j/GPC6vpan7x/jALqE53D7CNC2a1ztIIFyZQzctVBAUbWuSlr7NlwNuyVUK1RmANRyNdC7EbDuJnjjp90A9xhVTZCrZjqyZgFO42YA6SitUCqp0dlG4m977dnTuvslB9coJ6YBdKLY3dTfUJcgjXyb2tzGV4OqDqWCmxADOwtYbbgbxpt3yNeewCRiKt3yB+RYcoOSvtuDYjXSR6wAIYMDz2vs6vbKhPYBXXPGODcKb6szFvWTpv3yjEHNt8obWz5sxB0bqsNNw6Z7eLwC8XWrTAawZVsGaobgDYqqdw1tbnl7AKjqVe5PkkLchv1h65BfZMx3Of4i254BsXc/iqoBoVAxCD5OqQwDJ5jEjyh7x6pv/AHBd1IouMJWYCk5tRcnSm5P+ETuQnyeYm2wi2pYuoZicRUJBBAIOljzSCT6Sic872fdnx4GDxDHjlX5J2NzWRRqpO+oo272Gutmt0OQBERAE5b31+6tgx4Pp5kBRWxDkEZ0e9qKHeDY5mG7k7zbqUwXdR3NUMcgWtTzZblWBsy322PVpAOEUsTTHzh75No8KUhtf3N8JsfCfedBvxNV15g6K/vVlmv4nvPY0HklW/wA1RfdrJILlfhqgUKipckea3wmjYvDksSACPWPjNrbvR8IeYp/8tT+meeKvhICwoqf/ACEn3iAaoKRtu6x8ZQ1I8w7Q+M27xXcJfR17Y+E88V/CX0de2PhANTCnLlsNTcnMu4aDb0n3SjiD0dpfjNx8V/CX0de2PhHiv4S+jp2x8JOQad4Mede0PjPBhOlesfGbl4r+Evo6dv8AKPFdwl9HTt/lGQacMJ+svWPjPfA/116x8ZuHiu4S+jp2/wAo8V3CX0dO3+UZBqHgY89fd8Y8DHnr7vjNv8VvCX0dO3+UDvW8JegTt/lGQalRo5GDBlNr6XA3W55Zei3OvaHxm6eK3hL0Cdv8p54reEvQJ2/yjINI4h+dO0vxlPgz/qdpfjN58VnCX0dO3+U98VnCXoE7f5RkGi+Cv+r2l+MqGGf9XtL8Zu/ir4R9Anb/ACjxVcI+gTt/lGQaWMM36vaHxlXg7dHWPjNx8VXCPoE7f5R4qeEfQJ2/yjINO8HbmHWI8HbmHWJuPip4R9BT7f5T0d6fhH0NPtn+mQDTThW5h1iZLgj5NgW09/2TYfFLwh6Kl2j/AEz0d6ThD0VLtN/TJyDyrwrSPzz2WkOtjKZ+d7jMlS70OPO1aS+1j/6zKYHvLVSfla6qN4Sjc9pmH2RkGoDEhWDpUKspDKykBlZTcMOkGd8733dK3CGFFV0KurGm5ykU6jL/ANymd6nmubG43XmD4F70vB1GzVKT12Hpn5P7tLKR67zfqFFUUKqhVUAKqgAADYABoBIZJciIkAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQD/2Q=='
        // }
        // ,
        // {
        //     id:'101112',
        //     title: 'S7',
        //     rupee:'50000',
        //     detail:'The System Information app has been included with Windows since before Windows XP. It provides a much more detailed look at system information than you can get just using the Settings appThe System Information app has been included with Windows since before Windows XP. It provides a much more detailed look at system information than you can get just using the Settings appThe System Information app has been included with Windows since before Windows XP. It provides a much more detailed look at system information than you can get just using the Settings app',
        //     pic:'data:image/jpeg;base64,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'
        // }
    ]
}

function todoApp(state=ObjCards , action) {
    
    switch (action.type) {
        
        case 'AddCard':
            {
                console.log("data reached to reducer",action.data);

            //    var newCard={      
            //                     id:action.data[0],
            //                     title:action.data[1],
            //                     rupee:action.data[2],
            //                     detail:action.data[3],
            //                     pic:action.data[4]
            //                 }; 
              var list =state.Cards;
              console.log(list);
              var newList = list.concat(action.data);
              console.log(newList);
              
              return {
                        ...state,
                        Cards:newList
                     }

            };

       case 'GetDBdata' :
           {
            return {
                ...state,
                Cards:action.data
             }
   
           }
        case 'DeleteCard':
            {
                console.log("data reached to reducer",action.data);
                var afterDelete =  state.Cards.filter((item,index) => item.id !== action.data.id);
                console.log(afterDelete);
              
              return {
                    ...state,
                    Cards:afterDelete    
                    }


            };
            case 'EditCard':
            {
                console.log("data reached to reducer",action.data);
                var edit =  state.Cards.filter((item,index) => item.id === action.data);
                console.log(edit);
              return {
                    ...state,
                    Cards:edit         
                    }     
            };

           case 'DetailCard':
               {
                console.log("data reached to reducer",action.data);
                var detail =  state.Cards.filter((item,index) => item === action.data);
                console.log("previous data ")
                // var detail = state.Cards ;
              return {
                    ...state,
                    Cards:detail
                    }
               };
       
               default: 
                return state;
                
    } 
    
}

export default todoApp;