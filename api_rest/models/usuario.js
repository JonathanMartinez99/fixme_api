const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    nombre:{
        required:true,
        type:String,
        minlength:2
    },
    email:{
        required:true,
        type:String,
        unique:true
    },
    password:{
        required:true,
        type:String,
        minlength:8
    },
    telefono:{
        required:false,
        type:String
    },
    fechaNacimiento:{
        required:true,
        type:Date
    },
    favoritos:{
        required:false,
        type:[mongoose.Schema.Types.ObjectId],
        ref:'productos'
    },
    avatar:{
        required:false,
        type:String,
        default: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCADdANUDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9/KKKKACiiigAooooAKKKKACim7+aivdSh060ee4kjhhjGWeRgqqPcnigTaSuyek3CvPvEv7Ufgnw0WVtZjvpl/gso2uMn03KNn5tXEaz+3LpMRIsNC1S49DPLHDn8i9bRw9SWqR5OIz7L6DtUqr5a/lc95DA0E4r5ru/27NQY/6P4Zs417eZetIf0QVAv7dGtBudB0sj0E8grT6lW7ficD4wypf8vH/4DL/I+mtwpQc185WP7ds29ftPhlPcw3/X8DH/AFrp9B/bZ8K3jqt9a6xpzNwWaFZYx+KMW/8AHaUsJVXQ6KPE2WVdI1UvW6/NI9mormfCfxl8L+OHVNL1qxuZm6Ql/Lm/74bDfpXSeb8ucH8a53FrRntUq1OpHmpyTXdO46iiikaBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRTZW2pQAO+ysPxz8StG+HGnfatYv7ezjYfIrHdJKfREHzN+Aryf42ftgW+gSTaZ4WMN9eKSkl8w3W8B/wBj/now9fujj73Ir5z1zXr7xRqst9qV3cX15N9+aZ9zH29gOwGAOwruoYGU1zT0R8XnHGFDDN0sL78+/wBlfPq/Q9o+Iv7bOoai8kHhmxXT4egu7oCSc+6pyi/iW+grx7xP4v1bxrdedq+o3moydR58hZU/3V6L9ABWdRXq06MIfCj85x2cYzGO+Im2u2y+4TbS0UVqeaFFFCqWOByTwAKACgjNVtM1e01qF5bO7tbyKOaW3d7eZZVSWJ2jljJUkB0kVkZTyrKwIBBFWaA1TsxpjU/wqfqM12Xgf49eLPh+UWz1aa4tUGPst4TPCR6AE5X/AICRXH0VMoRlpJXN8Piq1CXPRk4vydj6i+Gn7Z2i+I3jtdeg/sK7bA84sZLVz/vdU/4EMD+9XslnfR38EcsMkc0Uq7kdGDK47EEdQfWvz56V13wt+N2vfCO8U6dcedYM2ZbGcloH9SB/Ax/vL7ZBAxXn1svT1p/cfcZTxtUi1Tx65l/Mlr81s/l+J9vUVxPwj+Oej/F3T91lI0F/EoM9jNgSxe47MvP3h6jIB4rtUORXlyi4u0j9Hw+JpV6aq0ZKUX1QtFFFSbBRRRQAUUUUAFFFFABRRTWkCdaAI76+h0+zmuJ5o4YYULySOwVUUDJJJ6AetfKv7QX7TVz8QpZtH0OSS10HJSSUZWTUPXPdYz/d6sOvB20ftNftByfEPUZND0eYjQbV8Syof+Qg4PXPeMHoP4iM9NteR162EwiS557n5hxPxRKq3hMG/d2k118l5fmIFwKWiivSPggoorm/ix8X/CvwJ8DXXibxp4g0vwzoFmQst7fzCOMuQSsaDlpJGwdsaBnbBwDQVGMpPlirtnSZoLYFfmj+0X/wca+G/D95cWHwp8EXniZoztTWPEUjWNmxH8UdrHmaRD/00eBv9kV8k/FX/guH+0d8T4JoIPFul+D7WfIMXhzSIrVkB7LNL5s6/VZQfelc+nwfB+Y1kpSSgvN6/crn7VftAftL+Af2WPCf9t/ELxZpPheykUtbpdSFrq+x1FvboGlmb1EaNjqcDJr8n/29/wDgu34s+O1re+FvhPBqXgHwnOGhuNXkkVdd1WM5BClCVs4z6Rs0pA/1igtHXwf4r8Wat498R3Wsa9q2qa5rF8d1xf6jdyXd1cH1eWRi7H6k1RUYFS2fa5TwfhcLJVKz9pLzWi9F1fm7n6Qf8EKP23Ph/wDswfDfx94f+I3xF0zwzZ6tq1pd6Hpl5bXbLHIIZFu5/MSJoY1k/wBFXDOCTAxIAILfqf8ACr43+C/jpYPdeCfF/hfxfbxLukbRtUgvvJH+2I2Yp/wICv5kMVPousXnhjXLbVNLvLzTNTs3Elve2c729zbsOjJIhDKR6qRQmRm3CFLGVpYiNRxlLyTX6P8AG5/UjuFFfir+xz/wXp+JfwTvLXSfiZHL8T/CqlY3upSsev2SdNyT5C3OOTtn+djj98gzn9b/ANnb9pfwP+1b8NbfxZ4C16117R5G8qbaDHcWE2MmG4hb54ZAOdrDBGGUspDGrn59muQ4vAO9ZXj0ktV/wH6nd0UUUzxSxpOsXfh7VIL6xuZrS8tm3xTRNhkP+eMHggkHIOK+rP2ef2jrf4pW66XqXlWfiCNc4B2x3qgcsnow6lfxGRnHyXT7S8m069iuLeSSC4t3EkUsbbXjYcgg9iK58Rh41VZ79z28lzyvl1W8NYPdd/8Agn6EKflpa8v/AGcfjynxY0M2d80cWvWCDz0A2i6Tgeco+pAYDoT6EV6hmvBnBwfLI/Z8HjKWKoxr0XeMgoooqTqCiiigAooooAa77K8K/a++NjaBYHwtpsxW9vow99Ih5ghPSP2Z+c+i/wC8DXq/xN8d23w48F3+sXWGW0iLJHnBmkPCIPqxA9utfDuva3deJ9au9QvpfOu76VppX9WPp6AdAOwAFd2Boc8ud7I+L4wzl4ah9VpP357+UevzexUUYFLRRXtH5OFFFFAHB/tN/tEeHv2UfgZ4g+IHih5P7J8PwB/IhYCe/mdgkNtFnjzJJGVQTwoJY4VWI/n0/a7/AGxPHH7bXxTl8UeNdQaQRl00vSoHP9n6HAx/1MCH1wN0h+eQjLE8Afoj/wAHKXxDu9O+Hvwj8JQyOtjrOp6prF2meHktIrWKH64F7Oee5HpX5OjpUyP1TgvK6dPCrGyXvyvZ9ktNPUaBTqKKk+4CiiigAooooAK9F/Za/as8bfscfFe18X+BtUayvkCxXlnLl7HV7cHJt7mLI3xnsQQyH5kZWAYedUUGdSlCpB06iunumf0S/sRf8FBfh7+3T4Ltbnw1qVvp/ixYA+qeFbq4H9pabIB8+xSFNxAOqzxgqQRuCPujX3MnBr+WeC5fTruK6ime3ntmEsc0bmN4WHIZWHKkdcggiv2Y/wCCLvwY+OmreHIfiP8AFn4g/Eabw3dWxXwx4Z1fWrmb7YjqQb64SViwi2n9zG33s+bgKIi9Jn5ZxBwtRwUHiIVUo9Ivf0T6/NLzZ+gANFA4oqj4ov8AhXxPfeCvEdrqumzeReWcgdG7MO6sO6kZBHoT9R9t/DD4hWfxO8HWesWZ2rcDbJEWy0Eg4dD7g/mMHoa+FTXqX7J/xV/4QHx8um3MpXS9ddYW3H5YZukb/j9w/wC8v93jixmH548y3R9ZwnnTwmJ9hUfuTdvR9H89mfXVFNjYsP8A61OrxD9gCiiigApr9KdVfU72HTbGS4uHWOGBGkkcnhVAJJP0AoFJpK7Pmz9tf4jNqfiGx8NQSfudPUXV2oPDSuDsU/7qHP8A20HpXhw4FaHi3xLN4y8Valq0+fN1K4ecgn7oY/Kv/ARgfhWfX0dGnyQUT8GzjHvGYyeIezenotgooorU80KFRndVUbmY4A9T2orP8V663hbwrqmqRjMml2U94ox1McbOP/QaBxjd2PwC/wCCrn7Tlx+1L+3D4y1KO5abw/4ZuX8NaEm7MaWto7I0i/8AXabzps+koHRRXzoOlRWcr3NpFLKzSSyIHd2OSzEZJPuTXU/Bj4dyfGH4yeEfCMMjwyeKNbstJEijLQie4SIyY/2Q5bn0rnrVI0oSqTdlFNv0R/Q+Bwapwp4WitrRS/D8zm80bsV95fGH/ggJ8RvC8803gjxZ4Z8YWakmOG+WTSb5h2G0+ZCfqZU+gq1/wT9/YP1r4UfGnxF4U+O/wT1i+8N+ONI/sm11n7F/adppFwJVdSbm1ZxbCXGBOHQo6Rjcqs5Hyc+OsolhJYrC1VUcVflTSm1pe0ZNNtLW3lY+vhwXmscVHDYmk6ak7czTcU/NpNWvpe58B5oPIr7W/bX/AOCLXjf4E3F5r3w5TUPiF4PXMn2SGMSa5pq9cPCgH2lQP+WkI3dS0agbj8Ud2XvGxVh/dIOCD757V7WUZ5gs0oLEYGopR/FeTW6Z4+aZPjMtrewxsHF/g/NPZo6zwr8AvHfjvwXJ4j0HwX4r13QYbl7OXUNN0qe8ghmVUdo3aNW2sFkQ4OOGFc1q2kXmgTtDf2d5YzL1juYHhYfgwBr7o/4Ibftj2Hwa+KWqfDPxFeR2Ok+PLmO40i6kfZFb6oqiPymPQC4QIgP/AD0hiUffNfrp/aVygx58y9sbzx+tfnvFHiNjMjzGeDr4VSjvFqTV181LZ3Ttb8T73hvgHC5zgI4uhiXGW0lyp2f3rRqzV7+p/M6I2MCy+XJ5bHaH2naT6A9M+1JnIr9gf+C+3he48T/sa6Lq26SX/hHPFVrLKWJISKaC5gJ/7+PCPqwr8fj0NfZcI8SLO8vWOUOR8zXLe9redl0ae3U+R4o4feTY54Nz59E72te/ld9U1ufpJ/wQO/ZD+E/x7tvFHjLxZpcniTxl4G1eCO20zUGWTSrSCWLfb3XkY/eymSK5XEpZE8pSFDYav12d2lkZmZmZjkknJJr8eP8Ag268RzWv7TnxG0dWb7NqHhJL2RR0MkF9AiE/QXMn51+w1fURP554w9osylGUm1ZNX6XWyCiiiqPlwprDjgsp9QcEU6g9KAPtj4B/EP8A4WZ8M9P1GRw15GptrwdxMmAT/wACGGx6MK7SvmP9iLxodO8V6poUj/udRg+1wgngSR4DfiUYfhHX01Gcivn8TS5KjifuXD+YPGYGFWXxbP1Wn47/ADHUUUVzntBXnv7Uvib/AIRr4JawyttmvglknPXzGCv/AOObz+Fegt92vBv25dZMfhTQrDPFzeyTkf8AXOPb/wC1a2w8eaokzx8+xHsMvq1F2t9+n6nzYtLRjFFfRH4WFFFFABUOo6ZDrdhcWVwVW3vYnt5WPQI6lWz7YJqaue+K149j8OdakjO1vsxjyOwchD+jGuXHYj6vh6mItfki5fcr/oehlOBljcdQwcXZ1Jxin25pJX/E/mLu9En8NXc+mXS7brTZGtJh6PGSjfqpr6//AOCIfwDl+LH7ZcPiae38zRvhxYyanM7LlGu5la3tY/8Ae+aaUf8AXt9K4/8Abz/Ze16w/bv1DQPDGj3mrXXxGuV1fRLO0j3PcyXG4zoOwCzrOSSQqR4ZioBNfq5+wF+x1Y/sUfs+WXhgSW994h1CT+0fEF/CDsurxlUbIyQD5MSgRpkDO1nIVnYV+Y8dcZUKWQp0ZfvMTGyXVJr3n8tV6/M/sjgvhKvPPGqyfJh5atrdp+6vno/TXse3UhFLRX8xn9GDQMHjI5zxxXi/7S//AAT3+Ev7WUkt54s8KW8evSD/AJDult9h1POMAvKgxMR2EyyAdhXtVFdWCx2JwdVVsLNwkusXZ/h08tvI5sZg8Pi6bpYmCnF9Grr8T8wPi7/wb0alFNNJ4D+I2n3Vu33LPxJZPbug9Dc24cN9fIX6V9Y/sQ2v7Qfwy0W38H/GLS9G8T2NjH5Vh4u0zXI7i52KOI7yOXy5ZvQTIpkPG9X+aQfR3WjHNfR5lxpmOZYX6pmPLVS2bilKL7pq3z79elvn8v4PwGAxX1rAc1NvdKTcX6p3+WunTrfzX9sP4Et+01+y7448CxLG174g0xksN+AovYmWe1yew8+KLJ9M1/PbJHJDI0c0UkE0bFJIpFKvGw4KsDyGByCDyCDX9Le2vyc/4LP/APBP68+G/wAQdR+MPhPT5JvCniOfz/EcMCbv7FvnOGuGA6QTscluiSswOBJGK+78IuJKWGrzyrESsqjTg3/MlZr1krW80kfGeKnD1TEUYZnh1d01aSS15W7p/J3v5O51X/Btn4V+0/HH4pa4zKv2Hw/aaainqxnuvNbH0FqM/wC8K/Xavzh/4Ii/Ceb4QfBvw3qtxG0Oo+Or99XkBGGFq8Xk26n2Ma+aP+u+a/R4HIr9yyfOIY6VdU9qc3G/eyWv33XyP4/8TMhqZbjqFWo/41KM7dtWrfck/n2sFFFFe0fm4UUUUAdF8IPEh8I/FTw/qG7YkV6kch9I5D5b/wDjrNX3RH0r885c7Djrjivvzwfq/wDb/hfT77/n8tYp/wDvpFb+teTmUdYyP0rgHENwrUH0af36P8kaVFFFeafoQHpXzV+3XdFvEPhu3/hjt7iT8WeMf+y19JyfcNfMv7c6keMvD7f3rGQf+RB/jXVgv4y+Z8xxg7ZXU9Y/+lI8Pooor3j8aCiiigArL8Z6M3iHwpqVivMl1bPGg9Xxlf8Ax7FalNbrWdajGtTlSntJNP0asdGDxU8NiKeJpfFCSkvWLTX4o+d/hFotjc+MpL6WytW1K1spIILqSBTcQRyPGZUR8blVjHGWUEAmNc/dGPTQKTWfhj/YfjC41yxeNbW7RvtEB4aN2IO5OOQW6g4wSccHAcK/jTizJcVleYPC4pbL3X0cbuzXlv8AO5/pbwRxVgOIMrjmGAe7tJdYzsrxfmrr1VnsFFFFfNH14UUUUAFFFFABUN9p1vq1lNZ3cMN1a3kbQTwTIJIp43BVkdTkMrKSCpBBBIIxU1JGryzqkahpGYKuTgEk4FXTjOU1Gnu2rW79PxM61SEIOdTSKWt9rdfl38jgvgV4ajf4mQpaQxW+n6OkjJFEgSKGNcxxoqjAUDcuAOAF44Fe9VzPwx+Hsfw+0WSNpVuL66YPdTAfKxHRVz/CMn3OSfYdNX9h8E5HUyvLI0a/8STcpeTdkl9yV/Ns/wA6/Fji6hxDn8sTg9aNOKhB7XSu3K3S8m7Xs7W0QUUUV9cfmYUUUUAI1fb/AMBLtr34MeGJG5YadCmf91dv9K+ITX2t+zku34IeGv8AryU/qa8/MfgT8/0PuuAv97q/4f1R21FFFeOfqQjfdr5y/bssv9M8M3W3+G5hJ/79Ef8As1fRxrxj9trQPtnwss74LubTdQjLN/dR1ZD/AOPFK6cJK1VHg8T0XVyyrFdFf7mn+h8tUUA5or3z8RCiiigAooooAjurf7XbyRt0kUrn0rh2VomZWGGQ7WHoRXeVy/i7Tvst8s6g+XPw3s3/ANevxrxhyGWIwVPM6S1pXUv8Muvyf4Nvof0p9HDiuGDzKtkdd2jXXND/ABxTuv8At6P4xSMuigHNFfzgf2gFFFFABRRRQAVoeFbT7Tq6sfuwDefr0H68/hWaz7RXWeGNN+wafuYYmmO5vYdhX33hvkMsyzqnJr93SfPJ+nwr5yt8k+x+SeNXFkMk4ZrRi/3uITpwXX3lab+UW9f5nFdTSFFFFf1sf57BRRRQAUUUUAI5wK+5/gzYf2X8J/DduRgx6Zb5z6mNSf1NfD9hpsms6hb2cI3TXkqQRj1Z2Cj9SK+/9OtEsLOOCNdscKiNR6ADA/lXmZk9Io/QuAaP7ytVfaK/Nk9FFFeUfpQVzPxl8Kt42+GGtaZGvmTXFsxhX1lX50/8eVa6amykAc9jTjJp3RnWpRqU5U5bNNP5n55xtuQH1GRTq7D49+CP+Ff/ABX1ayRNtrPJ9stcDA8uTLYHsrbl/wCA1x9fSxmpJSXU/n/FYeVCtKjLeLa+4KKKKo5wooooAKhvrGO/tXik+6wx9D2NTUVjiMPTr0pUaqvGSaafVPdHRhcVWwtaGJw8nGcGnFrdNO6a9GcPeWUmm3TQy/eXoezD1FR10/jK3VvDt5OI/MmtIJJoxnBJVS2M++K4bw54qs/E9t5lrJ8+MvE3EifUfj1HFfyRx1wjLIsdyU3zUp6xfVLs/Nd+q18j/Qzwq8Qo8VZV7arHlrUmozXRu11KPlLXTo01tY0qKM0Zr4g/UApCcUuM1X8OazZ+IPF8elxSfaGVHlmaJvljC44z3JYqOOmfXiu7Lcvr47EwwmHV5TaS7Xfd9F3PNzjNsPlmCq5hi3anTi5PvZK+i6s2vDWif2jN50q/uYyCAf4yP6CuqHNNiiWGJY1UKiDCgdhTq/r3hHhahkWBWGpvmm9Zy7uy/BdF+p/nT4iceYrirNHjqy5acdKcP5Y+feTteT9EtEgooor6k+DCiiigAoooPSgDvv2ZPCreLPjRpI8vzIdNLX8vsIx8n/kQpX2av9a8K/Yg8DfYPDGpa/NHiTU5Bb25I58qP7xH+9ISP+2Yr3YDFeHjqnNV9ND9j4PwLw+Xqct5vm+Wy/BX+YUUUVxn1IUUUUAeLftl/DQ+I/BUOuWsZa70PJm2r963b73/AHy2G9hvr5cHAr9Br20S+t5IZY0lilUo6MMq6kYII7g18U/HH4VzfCPx5caftdtPuMz2Ep53xE/dz/eT7p79D/EK9bL62ns38j8z42ylxqLHU1pKyl67J/Pb5HH0UCivSPz8KKM024mS0tXnmdYYYxl5HO1EHux4H40dbAOozXmvxP8A2u/h78KLHzL7xHZahcPny7TSpFvp5CPZG2p9ZGQHsc14b4l/4KrRpOy6L4HkliB+WW/1MRsR7xxxsB/32a9vA8OZli1zUKTt3dkvxaOWtjqFJ2nLU+rvEsqx+GtSY9FtJifwjavmC2la3ZHjZo5E5DKdrKfY1leBv+Cj9x8SPG+j+HPEGgaboeg+Ir6DS9Q1G2uZHl0+CeRYnnUMNpKKxbB4OK/QZf8AgjxoKj/kd9c/8Aoa/IvFngnOPrOHi6S+GX2o915+R/TX0fuK8rwWCxnt6jUpThpaT0UXrovM+LdN+J+rWChZJIbten76P5vzXBP45q6/xhv2T5bWyVuxIc/1r7G/4c86D/0O+uf+AcNH/DnnQcf8jvrn/gHDX46/D/Mm7uiv/Al/mf0RHxGylf8AL5/+Ay/yPiDWfGmqa9G0dxdMsTcGOICNT7HHX8c11n7N+3/hPLoH7x0+QD/v5HxX1n/w550H/od9c/8AAOGvJv20f2cND/4Jx/A+5+I1r4g1DxBqxuodJ07TLuFIYb2WdvmDOuWASFJZOO8YHTNfUcI8E5tTznDctJfHFWUo9XbufFeInG2UYvhvG0FWd3Tlb3ZdFe23W1jSBxTs18X2f/BVbWFm/wBJ8EaXLH3WHU5Im/No3/lXoHgH/gpt4I8Rzxw65p2seGZJDjzmQX1sn1aMeZ+UX5V/UWI4PzekuZ0W15NP8E2z+DaeZYeTspa/d+h9IUVheGPij4Z8bCH+x/EWg6o1woeNLW/ilkYH/YDbh9CM1uurRsVZWVh1BGK+bqU5QfLNNPz0/M7lJNXQUUA5oqRhV7wv4buvGXiSx0mxXdd6hKIY+M7M9WPsoyx9hVEmvpD9jP4Rtpunv4svocTXyGLT1YcpF/FL/wAD6A/3Rno1Y4it7OHN1PWyXK5Y/FRor4d5Psv+Dsj2rwh4ZtvBvhqx0uzXbbWECwR56kAdT7nqT6mtKgDAor516n7pCChFRjsgooooKCiiigAri/jd8Jbb4u+EZLGTbFewt51lcEf6mQDof9luhH49QCO0oxVRk4vmRjiMPTr05UaqvGSsz8+9Z0e68OavcWF9A1teWchimibrGw/oQQQRwQQehqv3r62/aO/Z7i+Kmn/2hpqxw+ILOPCMflW8Qc+Wx9eu1j0PB4PH5i/8FFP2k739n/wkPCelyTWHjDXldJGOUm0q1BKPIO6yMwKIe22RgQVWvqcqpTx9SNCl8T/Du/RH4nnmS1cur8ktYP4X38vUxf2tf+Chlr8KdSuvDfgtLTVvEVuzQ3l/L+8s9NccFFAP72Ze4+4hGDuIZB8XeN/iH4j+MeptqHinWtS1uUNlBdSlo4z/ANM4+EjHsigVzUEAd1jUbR047CtZE2gAcBe1fuPD/D2Fw0bxjdrq92/0R8ZmuOlTj7Om9X+CBE2rhQFA4wKdQOKK+wPmCO5hW4haNvuuCDj3r+iz9gf45t+0j+x78P8AxjNN9ov9S0iKHUZP717BmC5/OaKQ/Qiv51mr9Zf+Ddb43f2v8KfHnw8uJt03h/U4taslZufs90vlyKo/urLBuOO9x71+a+KGX+2yuOKW9KX4S0f42P0nwwzL2GaSw0tqsdPWOq/C5+klFIrblpa/n0/oMRzgV+Tv/Bxd8af7T+IHw9+HNvN+70m0m8R30QOVMkzG3tif9pUiufwl96/WGfPl/L6iv54v+Ci3xs/4aC/bd+I3iSOXzrH+1n0ywIbKfZrQC1Rl/wBl/KMn1kJr9E8M8teIzf6w9qUW/m/dX5t/I/OfE7MPYZT9XT1qyS+S1f4pL5niw4ppFOor+iD+eSC5sYbpcSRo3cEgZFek/Bf9szx98BbyG3t9Wk1zRI+G0vVJWmhKekbkl4SO2w7emVbpXnpGahvLcTQ4/iHK15mZZbRxdNxqRTPSy/HSoz5ZfC/wP1E/Z7/aN8O/tH+D21TRJWhurYqmoadOw+0WEh6BsfeRsHbIOGwRwwZV74HNfkn8FvjBrPwI+I1j4k0R/wDSrU+XPbuxWK9gJHmQSf7LYHP8LBWHKgj9fv2XfD3/AA1jpWk6t4clcaBqUCXUt66/8eqHIaNh080MGTaOjKewJr8O4kydZdP2kf4ctvJ9v8j7TC4epiKio0VzSe1jrv2efgnL8XvFO64jddC09g15IOPNPUQqfVhySOinsSK+xrWyjsoI4oUSOOMBVRF2qoAwAB2ArP8ABXgvT/APhq10vTYPItbZcAfxO3dmPdieSfU1rV+f4nEOrK/Q/ashyWGX4fk3m9ZPz7eiCiiiuc9wKKKKACiiigAooooAjurmK1tpJJpI4oo1LO7ttVABkknsB1zX82f7av7SFx+1r+1J4y8eSSObLWL9k0tGGPJsIv3VquOzGJUZgP43c96/cj/gqp8W5Pgp/wAE/PihrFvIYby70k6NbODhkkvZEsw6/wC0gnL/APAK/nmVAihVHC8AelfqfhzgY8tXGta6RX4N/mj814+xknKlhFtrJ/kv1Lekx7i7/wB35RzV4cCq+mLttV/2iT/n8qsV+44WHLSSPwnH1OfESfnb7goooroOMCM19Q/8EbvjYvwT/b+8IrPIIdP8ZRzeF7onpm42vBj3NzFbrn/aPrXy9VjRddvfC2u2OrabM1vqWlXMV7ZzL1hnicSRsPcMoP4V5+a4FY3B1cJL7cWvvWn4ndleOlgsZSxcfsST+56/gf0/RnK06uV+CPxRsvjX8HPCvjDT8fYvFGk22qwrnPlrNEsm0+67iCOxBFdV95a/kWUJQk4S3Wj9Uf15TqRnFTjs9V8zyz9tv45D9m79kzx/40SQR3eh6RK1iT/z+SYhth+M8kY/Gv5xreL7PEkYO7aAuSc9K/Xj/g4i+NP/AAjPwG8G+AreYrceL9WfUbpFb71rZKpCsPeeeFh7xHHSvyLAxX794W5f7HLJ4qS1qy/8ljdL8bn4D4oZj7bM44WO1OOv+KVm/wALBRRRX6YfmYUh6ilpG5oAzLuLyrlh/e5FfqN/wbl/tKNJP40+EeoXGY4l/wCEn0VSfuglIbyPPpk2zgDu8pr8v9VGJIz6jFe3f8Ev/i23wW/b++F2r+Zttb3WU0S6GcK8V8rWnzeytMj/AFjHpX5/xdlqxOBr0eqXMvVar/L5n6XwjmLo4mhWvo/dfo/df+Z/RQv3RRQv3RRX85n9AhRRRQAUUUUAFFFFABRRRQB+f/8AwcX+MG0X9jHwzpKuQ2veL7dHQH70cVrdSn8pFi/SvxfY7Vr9Yv8Ag5X1ZovA/wAI7DcdlxqWp3JHvHDAoP8A5FP51+TjH5a/cuBKahlEGvtOT/G36H41xlUcs0kn0UV+F/1NO0G2GMf7IqamQr+7X6U+v1iHwo/G6jvNvzYUUUVRAUhHNLRQB+0n/BA743n4i/sXSeF55hJf/D/V57HYTlzazn7TCx9t0k0Y9oa+424X8K/Fz/ggP8bf+Fe/tkah4RnmZLP4haNJBGgPD3lnuuIs/SH7X+Yr9iPiJ4+0/wCF/wAPtc8SatL5Ol+H9OuNTvH/ALkMETSOfwVTX8ycdZW8LndWEFpUakv+3t//ACa5/TPAuaLFZJTnN607xf8A27/9rY/En/gtr8bP+Fu/t765p8E3naf4Fsbbw/FtbKGVQZ5z/vCWdoz/ANcfavkmtHxr4zv/AIkeNNY8R6o2/VPEV/Pql4w7zTyNLJ/485rOr+icny9YHA0sIvsRS+fV/N3Z/O+b5g8djauLf25N/LovktAooor0jzgooooAp6sMrGfQmoNL8QTeEtUtdWt2ZbjSZ472JgcFXiYOpH4qKn1b7kf1rNvE821kX+8hzXg49J1XF7aH1uUSaw8Wu/6n9T+mahHq2m291CwaG6iWWNh/ErAEH8jU9cN+zBrDeIv2avh5qEh3PfeGdNuGJ7l7WJj/ADrua/lWpDkm4dnY/pulPngpd0FFFFZmgUUUUAfjn/xGvfs1/wDRNvjl/wCC7S//AJPo/wCI179mv/om3xy/8F2l/wDyfX8x9FAH9OH/ABGvfs1/9E2+OX/gu0v/AOT6P+I179mv/om3xy/8F2l//J9fzH0UAftP/wAFcP8Ag5D+DP7f9l4BTwn4O+J+lP4Uk1B7r+17SxjEouBbbNnl3UmSPJbOcYyMZycfFx/4KSeCyP8AkDeKP+/UH/x2vimivpMu4szDBUFh6DXLG9rpdXd/iz5/HcM4HF1nXrJ8ztfV9Fb8kfcg/wCCm3gdEA/sTxXwMcRW/wD8do/4ec+B/wDoC+LP+/Vv/wDHa+G6K9peJWdpW5o/+Ao8F+GuRt35Jf8AgTPuT/h5z4H/AOgL4s/79W//AMdo/wCHnPgf/oC+LP8Av1b/APx2vhuin/xErO/5o/8AgKD/AIhrkf8AJL/wJn3Kv/BTbwQ5wNE8WH/tlb//AB2t/Uf24dN0pbY3Hgf4hR/bB+6BsItxPnTwbSPMyrebbXCbTgkwvxxXwLoerNoOs2l9HDa3ElnMk6xXMKzQyFWDBXRsqynGCpGCMg17Zr//AAUM8da9Y61CLLwrYtrWjJ4eM9ppvlz2lgpYiCKTcWVQSpyxZgUBBBL7j/iJWd/zR/8AAUH/ABDXI/5Jf+BM+qPgt/wVs0H9nD45+EfGX/CK+Ore48K6raao0UlrDC00SursmTKMCSIsuehD+lfpL+23/wAHK/hT9q79j3WfC/w/+CP7QsFx47jgsrbUrvQbX7JcW73Efmxo0V1IXeVBsCgcrIT06/hF8TP23vF3xX8D2ul6p9lmvIfEd34knupoYriOeaZ3kVPKkQ/Ksk9yxDs6t5iAKuwl6fgj9tf4geABYrY6vMYNL02PSrK1lnna0tIVI37YBIIi0ihlcsjZEjMNr4ceFmXFGOx2KpYzENOdO3Loujurrrqe5lvC+AwOGq4PDpqFS/MuZ9VZ2fS60Prqb9raSDSvt0nwz+KkdibWe++0NowWLyIJZYZpdxfGyOWCaNm6B4pFPKkBfFH7WcngfRLvUta+GfxS0ixsLmWzuZ73SFgS3mimNvKj7nG1knHlMD92TCnDECvlS4/b8+Il74p03Vri60u5m0+bTZ2t5LFfsd81jczXUYngH7uVZJrmd5VK7ZGlckZYk5vxF/bV8ffFbwBN4Z13Uor7SbhIBJGyHLyxR2qC4Y5+aZvsu5pGyzvc3LHLSEj3f+IlZ3/NH/wFHh/8Q1yP+SX/AIEz6M/4ec+B/wDoC+LP+/Vv/wDHaP8Ah5z4H/6Aviz/AL9W/wD8dr4boo/4iVnf80f/AAFB/wAQ1yP+SX/gTPuT/h5z4H/6Aviz/v1b/wDx2j/h5z4H/wCgL4s/782//wAdr4boo/4iVnf80f8AwFB/xDXI/wCSX/gTPt69/wCCmHgm5C7dF8VcZ6wwf/Haqyf8FIvBjIf+JL4o6Y/1UH/x2viuiuWpx/m85c0pL/wFHdR4FyqlBQhF2X95n9InwE/4PHv2dPhP8CvBXha9+HnxruLzw1oNhpVxLDp+mGOSSC3jidkJvgSpZSQSAcYyB0rrP+I179mv/om3xy/8F2l//J9fzH0V8ZUm5yc5bvU+upwUIqC2Wh/Th/xGvfs1/wDRNvjl/wCC7S//AJPo/wCI179mv/om3xy/8F2l/wDyfX8x9FSUf04f8Rr37Nf/AETb45f+C7S//k+iv5j6KAP/2Q=='
    },
    lat:{
        required:true,
        type:Number
    },
    lng:{
        required:true,
        type:Number
    },
    direccion:{
        type:String,
        required:false
    },
    rol:{
        required:true,
        type:String,
        enum:['admin','user'],
        default:'user'
    },
    valoracion:{
        required:false,
        type:Number,
        default:0
    },
    productos:{
        required:false,
        type:[mongoose.Schema.Types.ObjectId],
        ref:'productos'
    }
});

let Usuario = mongoose.model('usuarios', userSchema);

module.exports = Usuario;